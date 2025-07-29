# Wisdomize - Modern EdTech Platform 🎓

A responsive educational platform built with React, Tailwind CSS, and Vite that provides course management for students, instructors, and administrators.

**Live Demo:** [https://wisdomize-frontend.onrender.com](https://wisdomize-frontend.onrender.com)

## ✨ Features

- **Multi-role access control** (Admin, Instructor, Student)
- **Course management system**
- **Responsive design** (Mobile, Tablet, Desktop)
- **Modern UI** with Tailwind CSS
- **Secure authentication flow**
- **API integration** with Axios
- **Loading states** and error handling

## 🛠 Tech Stack

**Frontend:**
- React 18
- Vite (Build Tool)
- Tailwind CSS
- React Router v6
- Axios
- Lucide Icons

**Hosting:**
- Render (Static Site)

## 📂 Project Structure

```bash
src/
├── assets/          # Static assets
├── components/      # Reusable components
├── context/         # React context providers
├── layouts/         # Page layout components
├── pages/           # Route pages
├── routes/          # Route configuration
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nandeesh-nh/wisdomize_frontend.git
cd wisdomize_frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔧 Configuration

Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=https://wisdomize-backend.onrender.com
```

## 🏗 Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 🌐 Deployment

The project is configured for deployment on Render as a static site:

1. Set build command: `npm install && npm run build`
2. Set publish directory: `dist`

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Nandeesh](https://github.com/Nandeesh-nh)
