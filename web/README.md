# 🚀 Alliage Web Distribution

> **Build powerful web applications with ease using the Alliage Framework**

Welcome to the **Web distribution** of the Alliage Framework! This pre-configured setup provides everything you need to create modern, scalable web applications with TypeScript and a robust architectural foundation.

---

## ✨ What's Inside?

This distribution comes bundled with three powerful components:

| Component | Description |
|-----------|-------------|
| 🏗️ **[Alliage Framework](https://github.com/alliage-framework/framework)** | The core framework providing architectural foundations |
| ⚡ **[Alliage Core](https://github.com/alliage-framework/core)** | Essential modules for dependency injection, configuration, and more |
| 🌐 **[Alliage Web](https://github.com/alliage-framework/web)** | Web-specific capabilities including routing, middleware, and server management |

---

## 🎯 Quick Start

Ready to build your web application? Start by exploring your main entry point:

📁 **[`src/controllers/main.ts`](./src/processes/main.ts)** - Your application's starting point

### 🔥 Development Mode

Get up and running in seconds:

```bash
yarn alliage:run:dev web
```

✅ **What happens:**
- 🔄 Automatic code compilation on-the-fly
- 🔃 Hot reload on file changes
- 📊 Real-time development feedback

🌍 **View your app:** Open [http://localhost:8080](http://localhost:8080) in your browser

### 📦 Production Build

Create an optimized build for deployment:

```bash
yarn alliage:build
```

📂 This generates a `dist/` folder with your compiled, production-ready code.

### 🚀 Production Mode

Run your optimized application:

```bash
yarn alliage:run web
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

## 📖 Next Steps

1. **🎨 Customize your controllers** - Add your business logic
2. **🔧 Configure middleware** - Handle authentication, logging, etc.
3. **📊 Set up your database** - Connect to your preferred data store
4. **🚀 Deploy** - Take your app to production

---

<div align="center">

**Happy coding! 🎉**

*Built with ❤️ using the Alliage Framework*

</div>
