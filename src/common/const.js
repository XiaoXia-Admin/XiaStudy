$(function () {
  ksdZlEdit.init();
});

var ksdZlEdit = {
  init: function () {
    ksdZlEdit.saveViewCount();
    ksdZlEdit.toggleCourselink();
  },

  toggleCourselink: function () {
    $("#zlCourselink").on("blur", function () {
      var link = $(this).val();
      if (!link) return;
      if (link.indexOf('course') == -1) return;
      var lindex = link.lastIndexOf("/") + 1;
      var links = link.substring(lindex);
      $("#zlCourseid").val(links);
    });
  },

  // 浏览数
  saveViewCount: function () {
    // var zlid = $("body").data("zlid");
    // $.post("/zl/bbs/hits/" + zlid).then(function (res) {
    //
    // });
  },

  // 删除专栏
  removeZl: function (obj) {
    KsdLogin.goLogin(function () {
      var index = layer.confirm('你确定移除该专栏吗？', {title: '提示', btn: ['确定移除?', '放弃操作']}, function () {
        layer.close(index);
        layer.confirm('你确定真的想好移除了吗？', {title: '提示', btn: ['确定移除?', '放弃操作']}, function () {
          var zlId = $(obj).data("opid");
          $.post("/u/topic/zl/del", {
            zlId: zlId
          }, function (res) {
            if (res.code == 20000) {
              layer.msg("删除成功!")
              window.location.href = "/u";
            } else {
              layer.msg(res.message);
            }
          })
        })
      }, function () {

      });
    })
  },

  // 保存修改
  editZl: function (obj) {
    KsdLogin.goLogin(function () {
      var zlId = $(obj).data("opid");
      var zlTitle = $("#zlTitle").val();
      var zlDescription = $("#zlDescription").val();
      var zlBackground = $("#zlBackground").val();

      var zlShortlink = $("#zlShortlink").val();
      var zlDownlink = $("#zlDownlink").val();
      var zlkeyword = $("#zlkeyword").val();
      var zlDownpwd = $("#zlDownpwd").val();
      var zlCourseid = $("#zlCourseid").val();
      var zlCourselink = $("#zlCourselink").val();
      var zlimg = $("#zlimg").val();
      var zlSort = $("#zlSort").val();

      var zltype = $("#zltype").val();
      var parentid = $("#parentid").val();
      var zlShow = $("input[name='zlShow']:checked").val();
      var zlStatus = $("input[name='zlStatus']:checked").val();
      var zlShowText = $("input[name='zlShow']:checked").attr("title");

      if (parentid > 0 && zltype == 2) {
        layer.msg("抱歉，该专栏已经隶属于子集，不能设置为合集!")
        return;
      }

      if (!zlTitle) {
        layer.msg("请输入专栏名称...")
        $("#zlTitle").focus();
        return;
      }

      if (zlTitle.length <= 2) {
        layer.msg("专栏名称长度必须大于4位...")
        $("#zlTitle").focus();
        return;
      }

      if (zlDescription && zlDescription.length > 400) {
        layer.msg("专栏描述不能大于400字符...")
        $("#zlDescription").focus();
        return;
      }

      $.post("/u/topic/zl/update", {
        zlId: zlId,
        zlTitle: zlTitle || "",
        zlShortlink: zlShortlink || "",
        zlDownlink: zlDownlink || "",
        zlimg: zlimg || "",
        keyword: zlkeyword || "",
        zlCourseid: zlCourseid,
        zlCourselink: zlCourselink || "",
        zlDownpwd: zlDownpwd || "",
        zlDescription: zlDescription || "",
        zlBackground: zlBackground || "",
        zltype: zltype || "1",
        zlSort: zlSort || "1",
        parentid: parentid || "",
        zlShow: zlShow,
        zlStatus: zlStatus
      }, function (res) {
        if (res.code == 20000) {
          layer.msg("修改成功!")
          $(".ksd-zl-div-source-title,#ksd-book-brand-tlt").attr("title", zlTitle).find("span").text(zlTitle);
          $(".ksd-zl-div-source-desc").text(zlDescription);
          $(".ksd-zl-downlink").attr("href", zlDownlink).find(".pwd").text(zlDownpwd);
          $(".ksd-zhuanlan-sumhrh-status").find("span").text(zlShowText);
          $(".ksd-zl-link-edit").trigger("click");
          if (zltype == 2) {
            window.location.href = window.location.href;
          }
        } else {
          layer.msg(res.message);
        }
      })
    })
  },

  // 解析地址
  parseLink: function (obj) {
    KsdLogin.goLogin(function () {
      if (ksdZlEdit.stimer) clearTimeout(ksdZlEdit.stimer);
      ksdZlEdit.stimer = setTimeout(function () {
        var link = $("#book-search-input-link").val();
        if (!link) {
          layer.msg("请输入链接地址...");
          $("#book-search-input-link").focus();
          return;
        }

        if (link.indexOf('/bbs/') == -1) {
          layer.msg("请输入正确的链接...");
          $("#book-search-input-link").select();
          return;
        }

        var topicId = link.substring(link.lastIndexOf("/") + 1);
        var html = $("#ksd-zl-bbs-" + topicId).html();
        if (html) {
          layer.msg("已经存在了!!!");
          return;
        }

        var zlid = $("body").data("zlid");
        var len = $("#ksd-zl-itemlist").children().length;
        var slen = len + 1;
        $.post("/zl/cnt/parse/" + zlid + "/" + topicId + "?sort=" + slen, function (res) {
          $("#book-search-input-link").val("");
          if (res.code == 20000) {
            layer.msg("解析成功!");
            var zctobj = res.data.zhuanLanContent;
            var zhuanLanAuthor = res.data.zhuanLanAuthor;
            $("#ksd-zl-itemlist").append("<li class=\"ksd-zl-item ksd-zl-item-" + zctobj.zlCntId + "\" id=\"ksd-zl-item-c" + slen + "\" data-sort=\"" + slen + "\" title=\"" + zctobj.zlTopicTitle + "\" data-opid=\"" + zctobj.zlCntId + "\">\n" +
              "<span class=\"fl pr ftp1 sorteditbox mr-2\" title=\"设置排序，升序\" style=\"display: none;\"><input class=\"ksd-sortinp\" data-sort=\"" + slen + "\" onblur=\"ksdZlEdit.editSort(this)\" maxlength=\"3\" style=\"border:1px solid #009688;width: 2rem;text-align: center;padding:2px;\" type=\"text\" value=\"" + slen + "\" data-opid=\"" + zctobj.zlCntId + "\"></span>\n" +
              " <span class=\"editsp editspan3\">\n" +
              "     <span class=\"editnum\">" + (slen < 10 ? '0' + slen : slen) + "、</span>\n" +
              "     <span id=\"ksd-zl-item-tlt-" + zctobj.zlCntId + "\" class='title'>" + zctobj.zlTopicTitle + "</span>\n" +
              " </span>\n" +
              " <div class=\"fr\">\n" +
              "     <span class=\"fr pr tp2 editbtn fz12\"  onclick=\"ksdZlEdit.removeItemReal(this,event)\" data-opid=\"" + zctobj.zlCntId + "\" title=\"删除\" style=\"display: none;\"><i class=\"iconfont fz12 iconremove pr tp1 mr-1\"></i></span>\n" +
              "     <span class=\"fr pr tp2 editbtn copydata mr-2 fz12\" onclick=\"ksdZlEdit.copydata(this,event)\" data-opid=\"" + zctobj.zlCntId + "\" title=\"复制\" style=\"display: none;\"><i class=\"iconfont fz14 iconsend-line pr tp1 mr-1\"></i></span>\n" +
              "     <span class=\"fr pr tp2 editbtn copydata mr-2 fz12\" onclick=\"ksdZlEdit.editItemReal(this,event)\" data-opid=\"" + res.data.zhuancontent.zlCntId + "\" title=\"编辑\" style=\"display: block;\"><i class=\"iconfont fz14 iconedit pr tp1 mr-1\"></i></span>\n" +
              " </div>\n" +
              "</li>");
            //编辑编辑状态
            // ksdZlEdit.editItemRealLi($(".ksd-zl-item-"+zctobj.zlCntId).find(".copydata"));
            $(".ksd-zl-item-"+zctobj.zlCntId).trigger("click");
            //重新排序
            ksdZlEdit.sortItem();
            // 解析作者
            if (zhuanLanAuthor) {
              $(".ksd-zhuanlan-module").prepend("<div id=\"ksd-zhuanlan-itemezy-" + zhuanLanAuthor.zlUserid + "\" class='ksd-zhuanlan-itemezy'><a href=\"/user/" + zhuanLanAuthor.zlUserid + "\" target=\"_blank\"><span class=\" ksd-zhuanlan-inblock larkui-popover-trigger\"><img data-testid=\"img-avatar\" src=\"" + zhuanLanAuthor.zlUserAvatar + "\" alt=\"" + zhuanLanAuthor.zlUserNickname + "\" title=\"" + zhuanLanAuthor.zlUserNickname + "\" style=\"width: 32px; min-width: 32px; height: 32px; border-radius: 16px;vertical-align: -6px;margin-right:2px;\"></span><span class=\"fz12\" style=\"text-overflow: ellipsis;max-width:100px;overflow: hidden;display: inline-block;white-space: nowrap;\"> " + zhuanLanAuthor.zlUserNickname + "</span></a></div>");
              $(".ksd-zhuanlan-sumhrh-num").text($(".ksd-zhuanlan-itemezy").length);
            }

          } else if (res.code == 213) {
            layer.msg(res.message);
            $("#book-search-input-link").val("");
          } else if (res.code == 212) { // 文章不存在
            layer.msg(res.message);
            window.location.href = "/nopage";
          } else if (res.code == 211) { // 专栏不存在
            layer.msg(res.message);
            window.location.href = "/nozl";
          } else if (res.code == 210) { //被禁止了
            layer.msg(res.message);
            window.location.href = "/nodisable";
          } else if (res.code == 209) { // 没登录
            layer.msg(res.message);
            KsdLogin.loginDialog();
          } else if (res.code == 209) { // 没登录
            layer.msg(res.message);
            KsdLogin.loginDialog();
          } else {
            layer.msg(res.message);
          }
        });
      }, 300);

    })
  },

  // 重新排序
  sortItem() {
    $("#ksd-zl-itemlist").children().each(function (index) {
      var slen = index + 1;
      $(this).attr("id", "ksd-zl-item-c" + slen).find(".editnum").text((slen<10?'0'+slen:slen) + "、")
    })
  },

  // 保存刷新父窗口
  refreshParent: function (zlCntId) {
    var zlid = $("body").data("zlid");
    if (zlCntId) {
      var sortlen = $("#ksd-zl-itemlist").find(".ksd-zl-item").length;
      $("#ksd-zl-item-opedit").addClass("ksd-zl-item ksd-zl-item-" + zlCntId)
        .removeData("mode")
        .removeAttr("id")
        .data({sort: sortlen, opid: zlCntId}).attr("id", "ksd-zl-item-c" + sortlen);
      KsdCache.setCache("zlid", zlCntId);
    }
    window.location.href = "/zl/" + zlid;
  },

  copydata: function (obj, $event) {
    var zlcntid = $(obj).data("opid");
    var len = $("#ksd-zl-itemlist").children().length;
    var slen = len + 1;
    $.post("/zl/cnt/copydata?zlcntid=" + zlcntid, function (res) {
      $("#ksd-zl-itemlist").append("<li class=\"ksd-zl-item ksd-zl-item-" + res.data.zhuancontent.zlCntId + " editmode\" id=\"ksd-zl-item-c" + slen + "\" data-sort=\"" + slen + "\" title=\"" + res.data.zhuancontent.zlTopicTitle + "\" data-opid=\"" + res.data.zhuancontent.zlCntId + "\">\n" +
        "<span class=\"fl pr ftp1 sorteditbox mr-2\" title=\"设置排序，升序\" style=\"display: block;\"><input class=\"ksd-sortinp\" data-sort=\"" + slen + "\" onblur=\"ksdZlEdit.editSort(this)\" maxlength=\"3\" style=\"border:1px solid #009688;width: 2rem;text-align: center;padding:2px;\" type=\"text\" value=\"" + slen + "\" data-opid=\"" + res.data.zhuancontent.zlCntId + "\"></span>\n" +
        " <span class=\"editsp editspan3 editspan\">\n" +
        "     <span class=\"editnum\" style=\"display: none;\">" + (slen < 10 ? '0' + slen : slen) + "、</span>\n" +
        "     <span id=\"ksd-zl-item-tlt-" + res.data.zhuancontent.zlCntId + "\" class='title'>" + res.data.zhuancontent.zlTopicTitle + "</span>\n" +
        " </span>\n" +
        " <div class=\"fr\">\n" +
        "     <span class=\"fr pr tp2 editbtn fz12\" onclick=\"ksdZlEdit.removeItemReal(this,event)\" data-opid=\"" + res.data.zhuancontent.zlCntId + "\" title=\"删除\" style=\"display: block;\"><i class=\"iconfont fz12 iconremove pr tp1 mr-1\"></i></span>\n" +
        "     <span class=\"fr pr tp2 editbtn copydata mr-2 fz12\" onclick=\"ksdZlEdit.copydata(this,event)\" data-opid=\"" + res.data.zhuancontent.zlCntId + "\" title=\"复制\" style=\"display: block;\"><i class=\"iconfont fz14 iconsend-line pr tp1 mr-1\"></i></span>\n" +
        "     <span class=\"fr pr tp2 editbtn copydata mr-2 fz12\" onclick=\"ksdZlEdit.editItemReal(this,event)\" data-opid=\"" + res.data.zhuancontent.zlCntId + "\" title=\"编辑\" style=\"display: block;\"><i class=\"iconfont fz14 iconedit pr tp1 mr-1\"></i></span>\n" +
        " </div>\n" +
        "</li>");

      //编辑编辑状态
      ksdZlEdit.editItemRealLi($(".ksd-zl-item-" + res.data.zhuancontent.zlCntId).find(".copydata"));
    });
  },

  // 编辑模式
  editzlmode: function (obj) {
    KsdLogin.goLogin(function () {
      $("#ksd-zhuanlan-mainbox-c").show();
      $("#ksd-book-mainbox").hide();
      $(".ksd-zl-div-source").toggle();
      $(".ksd-zl-div-edit").toggle();
      $(".ksd-zl-item").removeClass("active");
      $(obj).find("span").text(!$(".ksd-zl-div-source").is(":hidden") ? "编辑" : "关闭");
      $(obj).find("i").removeClass("iconedit iconremove1").addClass(!$(".ksd-zl-div-source").is(":hidden") ? "iconedit" : "iconremove1");
      $(".ksd-book-toc").hide();
      $(".blog-footer").css("marginRight", 0);
    })
  },

  // 链接解析
  editzldialog: function (obj) {
    KsdLogin.goLogin(function () {
      $(".ksd-book-parsebox").toggle();
      $(".ksd-zl-item").find(".editsp").removeClass("editspan2 editspan");
      $(".ksd-zl-item").find(".editbtn,.sorteditbox").hide();
      $(".ksd-zl-item").find(".editnum").show();
      $(".ksd-zl-item").removeClass("editmode");
      $(".ksd-editzl-link").find("span").text("编辑模式");
      $(".ksd-editzl-link").find("i").removeClass("iconremove1 iconchanpin1").addClass("iconchanpin1");
      $(obj).find("span").text($(".ksd-book-parsebox").is(":hidden") ? "解析" : "关闭");
      $(obj).find("i").removeClass("iconadd1 iconremove1")
        .addClass($(".ksd-book-parsebox").is(":hidden") ? "iconfont iconadd1" : "iconfont iconremove1 pr tp1")
    });

  },

  // 添加文章
  adddialog: function (obj) {
    $(".ksd-zl-item").find(".editsp").removeClass("editspan2 editspan");
    $(".ksd-zl-item").find(".editbtn,.sorteditbox").hide();
    $(".ksd-zl-item").find(".editnum").show();
    $(".ksd-zl-item").removeClass("editmode");
    $(".ksd-nextbtn").hide();
    $(".ksd-editzl-link").find("span").text("编辑模式");
    $(".ksd-editzl-link").find("i").removeClass("iconchanpin1 iconremove1").addClass("iconfont iconchanpin1 pr tp1")
    $(".blog-footer").css("marginRight", 0);
    var zlid = $("body").data("zlid");
    $("body,html").css("overflow", "hidden");
    $("#iframebox").height($(window).height() - 100).attr("src", "/zl/to-add/" + zlid);
    if ($(".book-page-editbox").is(":hidden")) {
      $(".ksd-zl-item").removeClass("active");
      $(".book-page-main,.ksd-book-toc").hide();
      $(".book-page-editbox").show();
      $(obj).find("span").text("关闭编辑");
      $(obj).find("i").removeClass("iconadd1 iconremove1").addClass("iconfont iconremove1 pr tp1")
      $("#ksd-zl-item-opedit").remove();
      var cachetitle = KsdCache.getCache("zl_bbs_title") || "";
      var len = $("#ksd-zl-itemlist").children().length;
      var slen = len + 1;
      $("#ksd-zl-itemlist").append("<li data-mode='edit' class=\"ksd-zl-item active\" id='ksd-zl-item-opedit' >\n" +
        " <span class=\"fl pr ftp1 sorteditbox mr-2\" title=\"设置排序，升序\"><input class='ksd-sortinp' style=\"border:1px solid #009688;width: 2rem;text-align: center;padding:2px;\" type=\"text\" value=\"1\"></span>\n" +
        " <span class=\"editsp \" >\n" +
        "     <span class=\"editnum\">" + (slen < 10 ? '0' + slen : slen) + "、</span>\n" +
        "     <input type='text' style='width: 15rem;padding:5px;' onkeydown='ksdZlEdit.toggleAdd(this)' onkeyup='ksdZlEdit.toggleAdd(this)' class='title' value='" + cachetitle + "'>\n" +
        "     \n" +
        " </span>\n" +
        " <div class=\"fr pr tp3\">\n" +
        "     <span onclick='ksdZlEdit.removeItem(this)' title='删除' class=\"fr\"><i class='iconfont iconremove1'></i></span>\n" +
        " </div>\n" +
        "                </li>");
      ksdZlEdit.controlNoEmpty();
    } else {
      $(".book-page-main").show();
      $(".book-page-editbox").hide();
      $("#ksd-zl-item-opedit").remove();
      $(".ksd-zl-item").removeClass("active");
      $(".ksd-book-toc").hide();
      $(obj).find("span").text("添加文章");
      $(obj).find("i").removeClass("iconadd1 iconremove1")
        .addClass("iconfont iconadd1")
      ksdZlEdit.controlNoEmpty();
    }
  },

  // 默认无数据控制展示
  controlNoEmpty: function () {
    var len = $("#ksd-zl-itemlist").children().length;
    if (len == 0) {
      // 隐藏没有数据提示
      $(".ksd-empty-al").show();
      $(".ksd-editzl-link").find("span").text("编辑模式");
      $(".ksd-editzl-link").find("i").removeClass("iconremove1").addClass("iconedit");
    } else {
      $(".ksd-empty-al").hide();
    }
  },

  toggleAdd: function (obj) {
    document.getElementById("iframebox").contentWindow.sysnChildCache(obj.value);
  },

  // 移除创建的新元素，这里要判断是否添加成功
  removeItem: function (obj) {
    if (confirm("你确定移除吗?")) {
      $(obj).parents("li").fadeOut("slow", function () {
        $(this).remove();
        $(".book-page-main").show();
        $(".book-page-editbox").hide();
        $("#ksd-zl-item-opedit").remove();
        $(".ksd-addzl-link").find("span").text("添加文章");
        //重新排序
        ksdZlEdit.sortItem();
        ksdZlEdit.controlNoEmpty();
      });
    }
  },

  // 同步编辑使用
  toggleItemMode: function (title) {
    $("#ksd-zl-item-opedit").find(".title").attr("title", title).val(title);
    $("#ksd-zl-item-opedit").find(".title").attr("title", title).html(title);

  },

  toggleItemMode2: function (title, zlcntid) {
    $("#ksd-zl-item-tlt-" + zlcntid).attr("title", title).val(title);
  },

  editothersort: function (obj) {
    var sort = obj.value;
    var len = $(obj).parents("li").prevAll().length;
    $(obj).parents("li").prevAll().find(".ksd-sortinp").each(function (index, obj) {
      obj.value = sort - len + index;
      $(obj).data("sort", obj.value);
    })

    $(obj).parents("li").nextAll().find(".ksd-sortinp").each(function (index, obj) {
      obj.value = sort * 1 + index + 1;
      $(obj).data("sort", obj.value);
    })
  },

  // 编辑排序
  editSort: function (obj) {
    KsdLogin.goLogin(function () {
      KsdLogin.goLogin(function () {
        var zlSort = obj.value;
        var zlCntId = $(obj).data("opid");
        var zlId = $("body").data("zlid");
        var csort = $(obj).data("sort");
        if (csort == zlSort) return;
        $.post("/zl/cnt/update/sort", {zlId: zlId, zlCntId: zlCntId, zlSort: zlSort}, function (res) {
          if (res.code == 20000) {
            layer.msg("修改排序成功，刷新查看效果!");
          } else if (res.code == 213) {
            layer.msg(res.message);
            $("#book-search-input-link").val("");
          } else if (res.code == 212) { // 文章不存在
            layer.msg(res.message);
            window.location.href = "/nopage";
          } else if (res.code == 211) { // 专栏不存在
            layer.msg(res.message);
            window.location.href = "/nozl";
          } else if (res.code == 210) { //被禁止了
            layer.msg(res.message);
            window.location.href = "/nodisable";
          } else if (res.code == 209) { // 没登录
            layer.msg(res.message);
            KsdLogin.loginDialog();
          } else if (res.code == 209) { // 没登录
            layer.msg(res.message);
            KsdLogin.loginDialog();
          } else {
            layer.msg(res.message);
          }
        });
      });
    });
  },

  // 编辑模式
  editlistmode: function (obj) {
    KsdLogin.goLogin(function () {
      var len = $("#ksd-zl-itemlist").children().length;
      if (len == 0) {
        layer.msg("没有可操作的项!");
        return;
      }

      $(".ksd-zl-item").find(".editsp").removeClass("editspan2").toggleClass("editspan");
      $(".ksd-zl-item").find(".editbtn,.sorteditbox,.editnum").toggle();
      $(".ksd-zl-item").toggleClass("editmode");
      $(".ksd-zl-item").removeClass("active");
      $(obj).find("span").text($(".ksd-zl-item").find(".editsp").hasClass("editspan") ? "关闭操作" : "编辑模式");
      $(obj).find("i").removeClass("iconchanpin1 iconremove1")
        .addClass($(".ksd-zl-item").find(".editsp").hasClass("editspan") ? "iconfont iconremove1 pr tp1" : "iconfont iconchanpin1")
      ksdZL.hidetoc = $(".ksd-zl-item").find(".editsp").hasClass("editspan");
      $("#ksd-zl-item-opedit").addClass("active");
    });
  },

  // 删除元素
  removeItemReal: function (obj, e) {
    $(obj).parents("li").addClass("active").siblings().removeClass("active");
    KsdLogin.goLogin(function () {
      var zlCntId = $(obj).data("opid");
      var zlId = $("body").data("zlid");
      var index = layer.confirm('你确定删除吗？', {title: '提示', btn: ['确定删除', '放弃操作']}, function () {
        layer.close(index);
        layer.confirm('你确定想好删除了吗？', {title: '提示', btn: ['确定删除', '放弃操作']}, function () {
          $.post("/zl/cnt/remove", {zlId: zlId, zlCntId: zlCntId}, function (res) {
            if (res.code == 20000) {
              layer.msg("删除成功!");
              $(obj).parents(".ksd-zl-item").fadeOut("slow", function () {
                $(this).remove();
                // 删除同步缓存
                ksdZL.addDataList();
                //重新排序
                ksdZlEdit.sortItem();
                // 控制隐藏
                ksdZlEdit.controlNoEmpty();
              });

              var userid = res.data.userid;
              if (userid) {
                $("#ksd-zhuanlan-itemezy-" + userid).fadeOut("slow", function () {
                  $(this).remove();
                  $(".ksd-zhuanlan-sumhrh-num").text($(".ksd-zhuanlan-itemezy").length);
                })
              }
            } else if (res.code == 213) {
              layer.msg(res.message);
              $("#book-search-input-link").val("");
            } else if (res.code == 212) { // 文章不存在
              layer.msg(res.message);
              window.location.href = "/nopage";
            } else if (res.code == 211) { // 专栏不存在
              layer.msg(res.message);
              window.location.href = "/nozl";
            } else if (res.code == 210) { //被禁止了
              layer.msg(res.message);
              window.location.href = "/nodisable";
            } else if (res.code == 209) { // 没登录
              layer.msg(res.message);
              KsdLogin.loginDialog();
            } else if (res.code == 209) { // 没登录
              layer.msg(res.message);
              KsdLogin.loginDialog();
            } else {
              layer.msg(res.message);
            }
          });
        });
      });
    })

    e.stopPropagation();
  },

  // 编辑
  editItemReal: function (obj, e) {
    $(obj).parents("li").addClass("active").siblings().removeClass("active");
    KsdLogin.goLogin(function () {
      var zlCntId = $(obj).data("opid");
      var zlId = $("body").data("zlid");
      ksdZL.hidetoc = true;
      $(".book-page-main,.ksd-book-toc").hide();
      $(".book-page-editbox").show();
      $("body,html").css("overflow", "hidden");
      $(".blog-footer").css("marginRight", 0);
      setTimeout(function () {
        $(".ksd-nextbtn").hide();
      }, 300);
      $("#iframebox").height($(window).height() - 100).attr("src", "/zl/to-update/" + zlId + "/" + zlCntId);
    });
    e.stopPropagation();
  },

  // 编辑
  editItemRealLi: function (obj) {
    $(obj).parents("li").addClass("active").siblings().removeClass("active");
    KsdLogin.goLogin(function () {
      var zlCntId = $(obj).data("opid");
      var zlId = $("body").data("zlid");
      ksdZL.hidetoc = true;
      $(".book-page-main,.ksd-book-toc").hide();
      $(".book-page-editbox").show();
      $("body,html").css("overflow", "hidden");
      $(".blog-footer").css("marginRight", 0);
      setTimeout(function () {
        $(".ksd-nextbtn").hide();
      }, 300);
      $("#iframebox").height($(window).height() - 100).attr("src", "/zl/to-update/" + zlId + "/" + zlCntId);
    });
  }
};
