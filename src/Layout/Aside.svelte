<script>
  import { link } from "svelte-spa-router";
</script>

<aside class="admin-sidebar">
  <div class="admin-sidebar-brand">
    <!-- begin sidebar branding-->
    <img
      class="admin-brand-logo"
      src="assets/img/logo.svg"
      width="40"
      alt="atmos Logo" />
    <span class="admin-brand-content">
      <a href="/" use:link>atmos</a>
    </span>
    <!-- end sidebar branding-->
    <div class="ml-auto">
      <!-- sidebar pin-->
      <a href="#!" class="admin-pin-sidebar btn-ghost btn btn-rounded-circle">
        <!--  -->
      </a>
      <!-- sidebar close for mobile device-->
      <a href="#!" class="admin-close-sidebar">
        <!--  -->
      </a>
    </div>
  </div>
  <div class="admin-sidebar-wrapper js-scrollbar">
    <!-- Menu List Begins-->
    <ul class="menu">
      <!--list item begins-->
      <li class="menu-item active">
        <a href="/" use:link class="menu-link">
          <span class="menu-label">
            <span class="menu-name">Escritorio</span>
          </span>
          <span class="menu-icon">
            <span class="icon-badge badge-success badge badge-pill">1</span>

            <i class="icon-placeholder mdi mdi-link-variant " />
          </span>
        </a>

      </li>
      <!--list item ends-->

      <!--list item begins-->
      <li class="menu-item ">
        <a href="#!" class="open-dropdown menu-link">
          <span class="menu-label">
            <span class="menu-name">
              Mantenimiento
              <span class="menu-arrow" />
            </span>
            <span class="menu-info">Contains submenu</span>
          </span>
          <span class="menu-icon">
            <i class="icon-placeholder mdi mdi-link-variant " />
          </span>
        </a>
        <!--submenu-->
        <ul class="sub-menu">
          <li class="menu-item">
            <a href="/Usuario/Index" use:link class=" menu-link">
              <span class="menu-label">
                <span class="menu-name">Usuarios</span>
              </span>
              <span class="menu-icon">
                <i class="icon-placeholder ">U</i>
              </span>
            </a>

          </li>
          <li class="menu-item">
            <a href="#!" class=" menu-link">
              <span class="menu-label">
                <span class="menu-name">Empresa</span>
              </span>
              <span class="menu-icon">
                <i class="icon-placeholder ">E</i>
              </span>
            </a>

          </li>

        </ul>
      </li>
    </ul>
    <!-- Menu List Ends-->
  </div>
</aside>
