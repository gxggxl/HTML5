/*
* Alert 弹窗插件
* author @ http://www.hsycms.com 
*/
const animation = function () {
    return {
        //打开
        open: function (id, txt = '') {
            const obj = $("#" + id);
            $("#mask-" + id).fadeIn(300);
            obj.addClass("ani-open");
            const height = obj.height();
            obj.css("margin-top", "-" + Math.ceil(height / 2) + 'px');
            if (txt !== '') {
                obj.find(".model-text").html(txt);
            }
            obj.show();
            setTimeout(() => {
                obj.removeClass("ani-open");
            }, 300)
        },

        //普通弹窗
        alert: function (id, txt = '', confirm) {
            this.open(id, txt);
            $("#" + id).find(".model-btn button").click(function () {
                confirm();
            })
        },

        //提示弹窗
        tips: function (id, txt = '', callback, time = 1600) {
            this.open(id, txt);
            const that = this;
            setTimeout(() => {
                that.close(id);
                if (typeof (callback) != 'undefined') {
                    callback();
                }
            }, time)
        },

        //询问弹窗
        confirm: function (id, txt = '', confirm, cancel) {
            this.open(id, txt);
            $("#" + id).find(".model-btn button").click(function () {
                if (!($(this).attr("class") !== "ok")) {
                    confirm();
                } else {
                    cancel();
                }
            })
        },

        //自定义弹窗
        model: function (id) {
            this.open(id);
        },

        //显示loading
        loading: function (id, txt) {
            this.open('loading', txt);
        },

        //隐藏loading
        hideLoading(id, callback) {
            this.close(id);
            if (typeof (callback) != 'undefined') {
                callback();
            }
        },

        //操作成功提示
        success: function (id, txt, callback, time = 1600) {
            this.open(id, txt);
            let that = this;
            setTimeout(() => {
                that.close(id);
                if (typeof (callback) != 'undefined') {
                    callback();
                }
            }, time)
        },

        //操作失败提示
        error: function (id, txt, callback, time = 1600) {
            this.open(id, txt);
            let that = this;
            setTimeout(() => {
                that.close(id);
                if (typeof (callback) != 'undefined') {
                    callback();
                }
            }, time)
        },

        //关闭
        close: function (id) {
            const obj = $("#" + id);
            $("#mask-" + id).fadeOut(200);
            obj.addClass("ani-close");
            setTimeout(() => {
                obj.hide();
                obj.removeClass("ani-close");
            }, 300)
        },

        //关闭所有
        closeAll: function () {
            $(".model-mask").fadeOut(200);
            $(".model").addClass("ani-close");
            setTimeout(() => {
                $(".model").hide().removeClass("ani-close");
            }, 300)
        }

    }
}();