# 🔥 Alliage REST API Distribution

> **Build powerful, scalable REST APIs with automatic OpenAPI documentation**

Welcome to the **REST API distribution** of the Alliage Framework! This specialized setup provides everything you need to create modern, well-documented REST APIs with TypeScript, featuring automatic OpenAPI schema generation and robust architectural foundations.

---

## ✨ What's Inside?

This distribution comes loaded with four powerful components for REST API development:

| Component | Description |
|-----------|-------------|
| 🏗️ **[Alliage Framework](https://github.com/alliage-framework/framework)** | The core framework providing architectural foundations |
| ⚡ **[Alliage Core](https://github.com/alliage-framework/core)** | Essential modules for dependency injection, configuration, and more |
| 🌐 **[Alliage Web](https://github.com/alliage-framework/web)** | Web capabilities including routing, middleware, and server management |
| 🚀 **[Alliage REST API](https://github.com/alliage-framework/rest-api)** | Advanced REST API features with automatic OpenAPI documentation |

🎯 **Perfect for:** Microservices, backend APIs, data services, and any application requiring well-documented REST endpoints.

---

## 🎯 Quick Start

Ready to build your REST API? Start by exploring your main entry point:

📁 **[`src/controllers/main.ts`](./src/processes/main.ts)** - Your API's starting point

### 🔥 Development Mode

Get your API running in seconds:

```bash
yarn alliage:run:dev web
```

✅ **What happens:**
- 🔄 Automatic code compilation on-the-fly
- 🔃 Hot reload on file changes
- 📊 Real-time development feedback
- 📝 Automatic OpenAPI schema generation

🌍 **Test your API:** Open [http://localhost:8080/api/hello/John](http://localhost:8080/api/hello/John) in your browser

📚 **View API Documentation:** Check out the auto-generated OpenAPI specs at [http://localhost:8080/api/specs](http://localhost:8080/api/specs)

### 📦 Production Build

Create an optimized build for deployment:

```bash
yarn alliage:build
```

📂 **What gets generated:**
- `dist/` folder with your compiled, production-ready code
- `alliage-rest-api-metadata.json` file for OpenAPI schema generation

### 🚀 Production Mode

Run your optimized API:

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

Full API testing located in `integration-tests/`:

```bash
yarn test:integration
```

---

## 🚀 Key Features

### 📝 Automatic OpenAPI Documentation
- **Zero-config documentation** - Your API schema is generated automatically
- **Interactive specs** - Browse and test your endpoints directly
- **Always up-to-date** - Documentation stays in sync with your code

---

## 📖 Next Steps

1. **🎨 Design your API endpoints** - Plan your resource structure and routes
2. **🔧 Add authentication & middleware** - Secure your API and add cross-cutting concerns
3. **📊 Connect your data layer** - Integrate with your preferred database or services
4. **🧪 Write comprehensive tests** - Ensure API reliability and contract compliance
5. **📚 Customize documentation** - Enhance your OpenAPI specs with descriptions and examples
6. **🚀 Deploy with confidence** - Take your API to production

---

<div align="center">

**Build amazing APIs! 🎉**

*Powered by ❤️ and the Alliage Framework*

</div>
