<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <div>
                        <a href="https://www.linkedin.com/in/francisca-suarez-rodriguez/">
                            <i class="fab fa-linkedin lk"></i>Linkedin
                        </a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                2018, Francisca Suárez
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  }
};
</script>
<style>
.lk {
  width: 2vw;
}
@media only screen and (max-width: 768px) {
  .lk {
    width: 5vw;
  }
}
</style>
