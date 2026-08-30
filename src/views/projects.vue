<template>
  <div class="page-wrapper">
    <transition name="fade">
      <SharinganLoader v-if="loading" />
    </transition>

    <navbar />

    <main class="main-container">
      <div class="projects-header">
        <h1 class="section-title">Projects</h1>
        <p class="section-subtitle">Custom kernels, native applications, diagnostic tools, and AI simulators</p>
        
        <!-- Category Fast Filters -->
        <div class="category-tabs" role="tablist">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            class="tab-btn"
            :class="{ active: selectedCategory === cat.id }"
            @click="selectedCategory = cat.id"
            role="tab"
            :aria-selected="selectedCategory === cat.id"
          >
            {{ cat.name }}
            <span class="tab-count">{{ getCategoryCount(cat.id) }}</span>
          </button>
        </div>
      </div>

      <!-- Category Sections -->
      <div class="sections-wrapper">
        <section 
          v-for="cat in filteredCategories" 
          :key="cat.id" 
          class="project-category-section"
        >
          <div class="category-heading">
            <div class="category-title-group">
              <span class="category-icon">{{ cat.icon }}</span>
              <h2 class="category-title">{{ cat.name }}</h2>
            </div>
            <div class="category-line"></div>
          </div>

          <div class="projects-grid">
            <div 
              v-for="(project, index) in cat.projects" 
              :key="index" 
              class="project-card"
            >
              <a 
                :href="project.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="card-link-wrapper"
              >
                <!-- Project Icon -->
                <div class="icon-container">
                  <img 
                    v-if="project.image" 
                    :src="project.image" 
                    :alt="project.title" 
                    class="project-icon" 
                    loading="lazy" 
                  />
                  <div v-else class="project-icon-placeholder">
                    <span>{{ project.iconText || '⚡' }}</span>
                  </div>
                </div>

                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-desc">{{ project.description }}</p>
                <div class="tags-container">
                  <span class="project-tag">{{ project.tag }}</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import SharinganLoader from "@/components/SharinganLoader.vue";
import rmxImg from "@/assets/BIN/PNG/RMX2061.png";
import dynamicImg from "@/assets/BIN/PNG/Dynamic.png";
import ifImg from "@/assets/BIN/PNG/IF.png";
import rtImg from "@/assets/BIN/PNG/RT.png";
import mconsImg from "@/assets/BIN/PNG/MCons.png";

export default {
  name: "ProjectsView",
  components: { Navbar, SharinganLoader },
  data() {
    return {
      loading: true,
      selectedCategory: "all",
      categories: [
        {
          id: "all",
          name: "All Projects"
        },
        {
          id: "android",
          name: "Android Development",
          icon: "🤖",
          projects: [
            {
              title: "RMX2061 Kernel",
              description: "Custom Android Kernel optimized for Realme 6 Pro and 7 Pro devices (SM7125).",
              url: "https://github.com/neel0210/android_kernel_realme_sm7125",
              image: rmxImg,
              tag: "Kernel / C"
            },
            {
              title: "Samsung A245M Kernel",
              description: "Custom Android kernel for Samsung Galaxy A24 (Helio G99) featuring KernelSU-Next integration.",
              url: "https://github.com/neel0210/android_kernel_samsung_a245M",
              iconText: "🧬",
              tag: "KernelSU / C"
            },
            {
              title: "Samsung A22x Kernel",
              description: "Custom Linux kernel for Samsung Galaxy A22x engineered and adapted for OneUI 7.",
              url: "https://github.com/neel0210/custom_kernel_samsung_a22x",
              iconText: "⚡",
              tag: "OneUI 7 / MediaTek"
            },
            {
              title: "LOGGING_KIT",
              description: "Production-grade Android logging & diagnostics suite extracting logcat, dmesg, pstore, and last_kmsg.",
              url: "https://github.com/neel0210/LOGGING_KIT",
              iconText: "📜",
              tag: "Diagnostics / Shell"
            },
            {
              title: "Termux Dev Setup",
              description: "One-command turnkey setup transforming Android into a complete mobile development and compilation workstation.",
              url: "https://github.com/neel0210/termux-setup",
              iconText: "💻",
              tag: "Termux / Automation"
            },
            {
              title: "Realme Tool",
              description: "All-in-one management, fastboot, and flashing toolkit adapted for RMX2061 devices.",
              url: "https://github.com/neel0210/RealmeTool",
              image: rtImg,
              tag: "Android Tool"
            },
            {
              title: "Dynamic Kitchen",
              description: "Android Dynamic Partition Kitchen tool for unpacking and repacking Samsung 9611 firmware.",
              url: "https://github.com/neel0210/dynamic",
              image: dynamicImg,
              tag: "ROM / Kitchen"
            }
          ]
        },
        {
          id: "mac",
          name: "Mac Development",
          icon: "🍎",
          projects: [
            {
              title: "MCons",
              description: "Native macOS folder customization utility with curated vector & anime icon packs. Built with Swift 6 and SwiftUI.",
              url: "https://github.com/neel0210/MCons",
              image: mconsImg,
              tag: "Swift 6 / SwiftUI / macOS"
            }
          ]
        },
        {
          id: "windows",
          name: "Windows Development",
          icon: "🪟",
          projects: [
            {
              title: "IMG Fetcher",
              description: "Lightweight automation utility to scrape and batch download all image assets from any webpage.",
              url: "https://github.com/neel0210/IMG_fetcher",
              image: ifImg,
              tag: "Python / CLI"
            },
            {
              title: "Realme Tool (Windows)",
              description: "Windows fastboot and device recovery toolkit for Realme devices.",
              url: "https://github.com/neel0210/RealmeTool",
              image: rtImg,
              tag: "Windows / Fastboot"
            },
            {
              title: "SEO-PPC Optimizer",
              description: "Data analysis pipeline linking Google Search Console & Google Ads to discover high-value search keywords.",
              url: "https://github.com/neel0210/SEO-PPC-Optimizer",
              iconText: "📈",
              tag: "Python / Analytics"
            }
          ]
        },
        {
          id: "linux",
          name: "Linux Development",
          icon: "🐧",
          projects: [
            {
              title: "Dynamic Kitchen (Linux)",
              description: "Linux utility to unpack and repack Android dynamic partitions, raw EXT4, F2FS, EROFS, and super images.",
              url: "https://github.com/neel0210/dynamic",
              image: dynamicImg,
              tag: "Linux / Shell"
            },
            {
              title: "LOGGING_KIT (Linux / CLI)",
              description: "Command-line kernel debug and diagnostic extraction framework for Linux & Android environments.",
              url: "https://github.com/neel0210/LOGGING_KIT",
              iconText: "🔍",
              tag: "Linux / Bash"
            },
            {
              title: "Termux Workstation Script",
              description: "Linux toolchain and environment provisioning script for ARM/Linux developers.",
              url: "https://github.com/neel0210/termux-setup",
              iconText: "⚙️",
              tag: "Linux / Shell"
            }
          ]
        },
        {
          id: "web-ai",
          name: "Web & AI Applications",
          icon: "🧠",
          projects: [
            {
              title: "CelWrite",
              description: "CELPIP Writing AI simulator featuring 50+ real exam prompts and Google Gemini AI automated evaluation.",
              url: "https://github.com/neel0210/CelWrite",
              iconText: "✍️",
              tag: "React / Gemini AI"
            },
            {
              title: "CRACALC",
              description: "Canada Tax Engine 2026 interactive financial & CRA tax calculation web simulator.",
              url: "https://github.com/neel0210/CRACALC",
              iconText: "🍁",
              tag: "Financial / Web"
            },
            {
              title: "Nikon D5300 Interactive Guide",
              description: "Interactive visual exposure simulator, settings cheat sheet, and guide for Nikon D5300 DSLR photographers.",
              url: "https://github.com/neel0210/NikonD5300",
              iconText: "📷",
              tag: "HTML5 / Tailwind"
            },
            {
              title: "SEO-PPC Optimizer",
              description: "Search marketing optimization engine analyzing organic ranking vs paid ad keyword profitability.",
              url: "https://github.com/neel0210/SEO-PPC-Optimizer",
              iconText: "📊",
              tag: "Data Pipeline"
            }
          ]
        }
      ]
    };
  },
  computed: {
    filteredCategories() {
      const contentCategories = this.categories.filter(c => c.id !== "all");
      if (this.selectedCategory === "all") {
        return contentCategories;
      }
      return contentCategories.filter(c => c.id === this.selectedCategory);
    }
  },
  methods: {
    getCategoryCount(catId) {
      if (catId === "all") {
        const contentCategories = this.categories.filter(c => c.id !== "all");
        return contentCategories.reduce((sum, c) => sum + (c.projects ? c.projects.length : 0), 0);
      }
      const found = this.categories.find(c => c.id === catId);
      return found && found.projects ? found.projects.length : 0;
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1400);
  }
};
</script>

<style scoped>
.category-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
  font-family: 'AngryBirds', sans-serif;
  font-size: 0.95rem;
  padding: 0.5rem 1.15rem;
  border-radius: 20px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-btn:hover {
  background: rgba(228, 20, 20, 0.2);
  border-color: rgba(228, 20, 20, 0.4);
  color: #fff;
  transform: translateY(-2px);
}

.tab-btn.active {
  background: linear-gradient(135deg, rgba(228, 20, 20, 0.65), rgba(255, 75, 43, 0.45));
  border-color: rgba(228, 20, 20, 0.85);
  color: #fff;
  box-shadow: 0 0 15px rgba(228, 20, 20, 0.45);
}

.tab-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  padding: 0.15rem 0.45rem;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
}

.sections-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.project-category-section {
  width: 100%;
}

.category-heading {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.75rem;
}

.category-title-group {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  white-space: nowrap;
}

.category-icon {
  font-size: 1.5rem;
}

.category-title {
  font-family: 'AngryBirds', sans-serif;
  font-size: clamp(1.35rem, 2.5vw, 1.85rem);
  color: #fff;
  letter-spacing: 0.5px;
  text-shadow: 0 0 10px rgba(228, 20, 20, 0.4);
}

.category-line {
  flex-grow: 1;
  height: 2px;
  background: linear-gradient(to right, rgba(228, 20, 20, 0.6), rgba(255, 255, 255, 0.05));
  border-radius: 2px;
}

.icon-container {
  width: 56px;
  height: 56px;
  margin-bottom: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-icon-placeholder {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(228, 20, 20, 0.35) 0%, rgba(20, 20, 30, 0.85) 100%);
  border: 2px solid rgba(228, 20, 20, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.project-card:hover .project-icon-placeholder {
  transform: scale(1.08) rotate(5deg);
  border-color: #ff310c;
  box-shadow: 0 0 15px rgba(228, 20, 20, 0.5);
}

.tags-container {
  margin-top: auto;
  padding-top: 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>