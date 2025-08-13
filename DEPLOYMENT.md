# Clothify Deployment Guide

## Backend Deployment (Required for Login functionality)

### Option 1: Deploy to Render (Recommended)

1. **Create a new Web Service on Render:**
   - Go to [render.com](https://render.com)
   - Create a new Web Service
   - Connect your GitHub repository
   - Set the root directory to `server/`

2. **Configure the service:**
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node

3. **Add Environment Variables:**
   - `PORT`: 5000 (or leave empty for Render to auto-assign)
   - `TWILIO_ACCOUNT_SID`: Your Twilio Account SID
   - `TWILIO_AUTH_TOKEN`: Your Twilio Auth Token
   - `TWILIO_SERVICE_SID`: Your Twilio Verify Service SID

4. **Deploy and get your backend URL** (e.g., `https://your-app.onrender.com`)

### Option 2: Deploy to Railway

1. **Create a new project on Railway:**
   - Go to [railway.app](https://railway.app)
   - Create a new project
   - Connect your GitHub repository
   - Set the root directory to `server/`

2. **Add Environment Variables** (same as above)

3. **Deploy and get your backend URL**

## Frontend Deployment

### Deploy to Vercel

1. **Deploy your frontend to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set the root directory to the main project folder (not server/)

2. **Add Environment Variable:**
   - `VITE_API_URL`: Your deployed backend URL (e.g., `https://your-app.onrender.com`)

3. **Deploy**

### Deploy to Render

1. **Create a new Static Site on Render:**
   - Go to [render.com](https://render.com)
   - Create a new Static Site
   - Connect your GitHub repository
   - Set the root directory to the main project folder

2. **Configure the service:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

3. **Add Environment Variable:**
   - `VITE_API_URL`: Your deployed backend URL

4. **Deploy**

## Testing

After deployment:
1. Your frontend will be available at your Vercel/Render URL
2. Your backend will be available at your backend URL
3. The login functionality should work properly

## Troubleshooting

- **CORS errors:** Make sure your backend has CORS enabled (already configured in server.js)
- **Environment variables:** Double-check that all environment variables are set correctly
- **API URL:** Ensure the `VITE_API_URL` in your frontend matches your backend URL exactly

## Local Development

For local development:
1. Start the backend: `cd server && npm install && npm start`
2. Start the frontend: `npm install && npm run dev`
3. The frontend will automatically use `http://localhost:5000` for the API
