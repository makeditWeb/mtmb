const TIME_ZONE = 9 * 60 * 60 * 1000;
let modal_alert, modal_confirm, modal_password;
let alertCallback,
  confirmCallback_agree,
  confirmCallback_cancel,
  passwordCallback;
let section;

const $modal_alert = function (title, content, callback) {
  alertCallback = callback;
  $("#modal-alert-title").html(title);
  $("#modal-alert-content").html(content);
  modal_alert.show();
  $("#modal-alert-agree").focus();
};

const $modal_confirm = function (
  title,
  content,
  callback_true,
  callback_false
) {
  confirmCallback_agree = callback_true;
  confirmCallback_cancel = callback_false;
  $("#modal-confirm-title").html(title);
  $("#modal-confirm-content").html(content);
  modal_confirm.show();
  $("#modal-confirm-cancel").focus();
};

const $modal_pasword = function (callback_password) {
  passwordCallback = callback_password;
  $("#modal-password-input").val("");
  modal_password.show();
  $("#modal-password-input").focus();
};

const $modal_hide = function () {
  modal_alert.hide();
  modal_confirm.hide();
  modal_password.hide();
};

$(function () {
  if ($("#modal-alert").length > 0) {
    modal_alert = new bootstrap.Modal(document.getElementById("modal-alert"), {
      keyboard: false,
    });
  }

  if ($("#modal-confirm").length > 0) {
    modal_confirm = new bootstrap.Modal(
      document.getElementById("modal-confirm"),
      {
        keyboard: false,
      }
    );
  }

  if ($("#modal-password").length > 0) {
    modal_password = new bootstrap.Modal(
      document.getElementById("modal-password"),
      {
        keyboard: false,
      }
    );
  }

  // confirm callback - agree
  $(document).on("click", "#modal-confirm-agree", function () {
    if (typeof confirmCallback_agree == "function") confirmCallback_agree();
  });

  // confirm callback - cancel
  $(document).on("click", "#modal-confirm-cancel", function () {
    if (typeof confirmCallback_cancel == "function") confirmCallback_cancel();
  });

  // alert callback
  $(document).on("click", "#modal-alert-agree", function () {
    if (typeof alertCallback == "function") alertCallback();
  });

  // password callback
  $(document).on("click", "#modal-password-agree", function () {
    if (typeof passwordCallback == "function") passwordCallback();
  });

  // modal close
  $(document).on("click", ".closeModalBtn", function () {
    $(".modal").modal("hide");
  });

  $(document).on("input", ".use_maxlength", function () {
    if ($(this).val().length > $(this).data("maxlength")) {
      $(this).val($(this).val().slice(0, $(this).data("maxlength")));
    }
  });

  $(".move_page").on("click", function () {
    var url = $(this).data("url");
    console.log(url);
    location.href = url;
  });

  if (section) {
    const targetElement = document.getElementById(section);
    const offset = -120; // 원하는 만큼 더 높게 스크롤하기 위한 값 (음수는 더 높게, 양수는 더 낮게 스크롤)
    const targetPosition = targetElement.getBoundingClientRect().top + offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth", // 부드러운 스크롤 효과를 주기 위해 "smooth" 옵션 사용
    });
  }
});

// email validate
const verifyEmail = function (emailValue) {
  var regExp =
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return emailValue.match(regExp) != null ? true : false;
};

// hp validate
const verifyTelnum = function (numValue) {
  var regExp = /^\d{2,4}[.-]?\d{3,4}[.-]?\d{4}$/;
  return numValue.match(regExp) != null ? true : false;
};

// json validate
const isjson = function (str) {
  return typeof JSON.parse(str) === "object" ? true : false;
};

// isnull validate
const isNull = function (str) {
  return str == null || str == "null" ? true : false;
};

const formValidate = function (obj = "body") {
  var valid_Count = 0;
  var valid_msg = [
    "필수 입력 입니다.",
    "숫자만 입력 가능합니다.",
    "이메일 주소만 가능합니다.",
    "연락처만 입력 가능합니다.",
  ];
  $(obj)
    .find(".form-valid")
    .each(function () {
      var valid_thisFlag = false;
      var popover_Content;
      var _this = $(this);
      _this.popover("dispose");

      if (_this.val().length == 0 && _this.hasClass("fv_empty")) {
        valid_Count++;
        popover_Content = valid_msg[0];
      } else if (
        _this.val().length > 0 &&
        _this.hasClass("fv_numeric") &&
        !$.isNumeric(_this.val())
      ) {
        valid_Count++;
        popover_Content = valid_msg[1];
      } else if (
        _this.val().length > 0 &&
        _this.hasClass("fv_email") &&
        !verifyEmail(_this.val())
      ) {
        valid_Count++;
        popover_Content = valid_msg[2];
      } else if (
        _this.val().length > 0 &&
        _this.hasClass("fv_telnum") &&
        !verifyTelnum(_this.val())
      ) {
        valid_Count++;
        popover_Content = valid_msg[3];
      } else {
        valid_thisFlag = true;
        _this.removeClass("is-invalid").addClass("is-valid").popover("dispose");
      }

      if (!valid_thisFlag) {
        $(_this)
          .popover({
            title: _this.attr("title"),
            content: popover_Content,
            placement: "top",
          })
          .addClass("is-invalid")
          .popover("show");
        setTimeout(function () {
          _this.popover("hide");
        }, 3000);
      }
    });

  return valid_Count > 0 ? false : true;
};

const dateToIsoString = function (dateString) {
  let result;
  if (!isNaN(Date.parse(dateString))) {
    result = new Date(dateString);
    result = new Date(result.getTime() + TIME_ZONE)
      .toISOString()
      .replace("T", " ")
      .slice(0, -5);
  } else {
    result = "-";
  }
  return result;
};

const setCookie = function (key, value, exp) {
  var date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    key + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
};

const getCookie = function (key) {
  var value = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  return value ? value[2] : null;
};

const deleteCookie = function (key) {
  document.cookie = key + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

const replaceToBr = function (text) {
  return text.replace(/\\n/g, "<br />");
};

const replaceRemoveBr = function (text) {
  return text.replace(/<br\s*\/?>/gi, "");
};

const replaceToCr = function (text) {
  return text.replace(/<br\s*\/?>/gi, "\n");
};
