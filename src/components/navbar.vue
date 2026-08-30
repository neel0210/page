<template>
  <header class="navbar-wrapper">
    <nav class="navbar" aria-label="Main Navigation">
      <div class="nav-container">
        <router-link to="/" class="logo">
          <span class="logo-text">Neel0210</span>
        </router-link>

        <button 
          class="nav-toggle" 
          :class="{ 'is-active': mobileMenuOpen }" 
          @click="toggleMobileMenu" 
          aria-label="Toggle navigation menu"
          :aria-expanded="mobileMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-menu" :class="{ 'is-open': mobileMenuOpen }">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact-active-class="active" @click="closeMobileMenu">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link" active-class="active" @click="closeMobileMenu">
              Projects
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/connect" class="nav-link" active-class="active" @click="closeMobileMenu">
              Connect
            </router-link>
          </li>
          <li class="nav-item">
            <a 
              href="https://github.com/neel0210" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="nav-link external-link"
              @click="closeMobileMenu"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      mobileMenuOpen: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    }
  }
};
</script>

<style scoped>
.navbar-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(10, 10, 15, 0.65);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar {
  width: 100%;
  padding: 0.75rem 1.5rem;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  font-family: 'AngryBirds', sans-serif;
  font-size: 1.75rem;
  color: #fff;
  letter-spacing: 0.5px;
  text-shadow: 0 0 12px rgba(228, 20, 20, 0.6);
  transition: text-shadow 0.3s ease, transform 0.3s ease;
}

.logo:hover {
  text-shadow: 0 0 20px rgba(255, 49, 12, 0.9);
  transform: scale(1.02);
}

.nav-menu {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: inline-block;
}

.nav-link {
  display: inline-block;
  text-decoration: none;
  font-family: 'AngryBirds', sans-serif;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: all 0.25s ease;
}

.nav-link:hover {
  color: #fff;
  background: rgba(228, 20, 20, 0.2);
  border-color: rgba(228, 20, 20, 0.4);
  box-shadow: 0 0 15px rgba(228, 20, 20, 0.3);
  transform: translateY(-1px);
}

.nav-link.active {
  color: #fff;
  background: linear-gradient(135deg, rgba(228, 20, 20, 0.45), rgba(255, 75, 43, 0.25));
  border-color: rgba(228, 20, 20, 0.6);
  box-shadow: 0 0 18px rgba(228, 20, 20, 0.4);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
}

.nav-toggle span {
  width: 2rem;
  height: 0.2rem;
  background: #fff;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.75rem 1rem;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-toggle.is-active span:first-child {
    transform: rotate(45deg);
  }

  .nav-toggle.is-active span:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }

  .nav-toggle.is-active span:nth-child(3) {
    transform: rotate(-45deg);
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 75%;
    max-width: 320px;
    background: rgba(12, 12, 18, 0.96);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem;
    transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.7);
    border-left: 1px solid rgba(228, 20, 20, 0.2);
  }

  .nav-menu.is-open {
    right: 0;
  }

  .nav-link {
    font-size: 1.35rem;
    width: 100%;
    text-align: center;
    padding: 0.75rem 1.5rem;
  }
}
</style>