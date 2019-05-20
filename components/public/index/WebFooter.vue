<template>
  <footer class="flex flex-col mt-12 overflow-hidden">
    <section class="flex bg-footer">
      <div class="container">
        <h3 class="text-wtm-blue-dark text-3xl">
          ¡Apúntate a nuestra newsletter!
        </h3>
        <div class="border border-grey-dark w-full lg:w-2/3 border-t-0 mt-12" />
        <form
          class="mt-8"
          action="https://asturvalley.us1.list-manage.com/subscribe/post?u=f10809b78bdc8e15b8261a06d&amp;id=349bf4b4c1"
          method="post"
        >
          <input
            class="border border-wtm-blue-dark p-4 rounded-lg mr-4 w-full sm:w-auto"
            type="email"
            name="EMAIL"
            placeholder="Introduce tu email"
          >
          <WebButton
            class="button mt-4 sm:mt-0 w-full sm:w-auto"
            type="submit"
          >
            Apúntate
          </WebButton>
        </form>
        <img
          class="mt-8"
          src="/img/google-oscuro.svg"
        >
        <div class="flex flex-col items-start md:flex-row md:items-center mt-8">
          <img src="/img/wtm-tagline-logo-hdr.svg">
          <img
            class="mt-4 md:mt-0 md:ml-8 h-4"
            src="/img/gdgasturias-new.png"
          >
        </div>
        <div class="flex items-center mb-4 mt-4 justify-arrond items-center sm:mb-8 sm:mt-8">
          <a
            class="no-underline"
            href="mailto:wtm@gdgasturias.com"
          >
            <span class="icon-mail text-grey-darkest mr-4 text-xs sm:text-base" />
          </a>
          <a
            class="no-underline"
            href="https://www.facebook.com/wtmasturias/"
          >
            <span class="icon-facebook text-grey-darkest mr-4 text-xs sm:text-base" />
          </a>
          <a
            class="no-underline"
            href="https://twitter.com/WTMASturias"
          >
            <span class="icon-twitter text-grey-darkest mr-4 text-xs sm:text-base" />
          </a>
          <a
            class="no-underline"
            href="https://instagram.com/WTMASturias"
          >
            <span class="icon-instagram text-grey-darkest mr-4 text-xs sm:text-base" />
          </a>
          <a
            class="no-underline"
            href="https://www.youtube.com/channel/UCo0T45oWvAQJ6iamPFJy1cg"
          >
            <span class="icon-youtube text-grey-darkest mr-4 text-xs sm:text-base" />
          </a>
        </div>
      </div>
    </section>
    <section class="footer-skew bg-wtm-blue-ligth flex items-center justify-center text-white text-2xs sm:text-sm p-2 whitespace-no-wrap">
      <span class="footer-unskew">
        Made with <span class="icon-asturias ml-1 mr-1" /> by WTMAsturias and hosted by <a
          href="https://gigas.com/"
          class="text-white no-underline text-2xs sm:text-sm ml-1"
        >Gigas</a>
      </span>
    </section>
  </footer>
</template>

<script>
import WebButton from '~/components/public/WebButton'

export default {
  components: {
    WebButton
  }
}
</script>

<style>
.bg-footer {
  background-image: url('/img/footer-02.png'), url('/img/lines-02-L.png');
  background-position: right bottom, left bottom;
  background-size: 170px, 0;
  background-repeat: no-repeat;
}

.footer-skew {
  transform: inherit;
}

.footer-unskew {
  transform: inherit;
}

@screen sm {
  .bg-footer {
    background-size: 300px, 8vw;
  }
}

@screen md {
  .bg-footer {
    background-size: 400px, 8vw;
  }
}

@screen lg {
  .bg-footer {
    background-size: 580px, 8vw;
  }
}

@screen xl {
  .bg-footer {
    background-size: contain, 8vw;
  }
  .footer-skew {
    transform: translateX(370px) skew(-45deg);
  }

  .footer-unskew {
    transform: translateX(-370px) skew(45deg);
  }
}
</style>
