# ⚡ Alliage Standard Distribution

> **Build any application you can imagine with the flexible Alliage Framework**

Welcome to the **Standard distribution** of the Alliage Framework! This foundational setup provides a clean, unopinionated starting point for building any type of application - from CLI tools to background services, APIs to desktop apps.

---

## ✨ What's Inside?

This distribution includes the essential building blocks for any application:

| Component | Description |
|-----------|-------------|
| 🏗️ **[Alliage Framework](https://github.com/alliage-framework/framework)** | The core framework providing architectural foundations |
| ⚡ **[Alliage Core](https://github.com/alliage-framework/core)** | Essential modules for dependency injection, configuration, lifecycle management, and more |

🎯 **Perfect for:** CLI applications, background services, microservices, custom tools, and any TypeScript project needing solid architecture.

---

## 🎯 Quick Start

Ready to build your application? Start by exploring your main entry point:

📁 **[`src/processes/main.ts`](./src/processes/main.ts)** - Your application's starting point

### 🔥 Development Mode

Get up and running in seconds:

```bash
yarn alliage:run:dev main
```

✅ **What happens:**
- 🔄 Automatic code compilation on-the-fly
- 🔃 Hot reload on file changes
- 📊 Real-time development feedback
- 🛠️ Perfect for rapid prototyping and development

### 📦 Production Build

Create an optimized build for deployment:

```bash
yarn alliage:build
```

📂 This generates a `dist/` folder with your compiled, production-ready code.

### 🚀 Production Mode

Run your optimized application:

```bash
yarn alliage:run main
```

---

## 🧪 Testing

### Unit Tests 🔬

Write unit tests anywhere in your `src/` folder following this structure:
- 📁 Place tests in `__tests__/` folders
- 📝 Name files with `.test.ts` extension

```bash
yarn test:unit
```

### Integration Tests 🔧

Full application testing located in `integration-tests/`:

```bash
yarn test:integration
```

---

## 🚀 What Can You Build?

The Standard distribution is incredibly versatile. Here are some ideas:

- 🖥️ **CLI Applications** - Command-line tools with robust argument parsing
- ⚙️ **Background Services** - Data processors, schedulers, and automation tools
- 🔌 **Microservices** - Lightweight, focused services for distributed architectures
- 📊 **Data Pipeline Tools** - ETL processes and data transformation utilities
- 🤖 **Automation Scripts** - Sophisticated automation with proper error handling
- 🔧 **Developer Tools** - Build tools, generators, and development utilities

---

## 📖 Next Steps

1. **🎨 Design your application** - Plan your architecture and features
2. **🔧 Configure your services** - Set up dependency injection and configuration
3. **📊 Add your business logic** - Implement your core functionality
4. **🧪 Write comprehensive tests** - Ensure reliability and maintainability
5. **🚀 Deploy with confidence** - Take your app to production

---

<div align="center">

**Build something amazing! 🎉**

*Powered by ❤️ and the Alliage Framework*

</div>
