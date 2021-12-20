const myHome = {
  Init() {
    this.handleShowCardDescription();
  },
  handleShowCardDescription() {
    $(".post-image").hover(function (e) {
      e.preventDefault();
      const description = $(this).parent().find(".post-description");
      const iconNext = $(this).parent().find(".btn-icon-next");
      description.show();
      iconNext.show();
    });

    $(".post-image").mouseleave(function () {
      const description = $(this).parent().find(".post-description");
      const iconNext = $(this).parent().find(".btn-icon-next");
      description.hide();
      iconNext.hide();
    });
  },
};

// eslint-disable-next-line no-undef
$(function () {
  myHome.Init();
});
