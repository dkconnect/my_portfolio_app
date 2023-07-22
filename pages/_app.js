import "../styles/app.css"

export default function App({ Component, pageProps }) {
    return (
        <div
            style={{
                width: "100%"
            }}
        >
            <Component {...pageProps} />
        </div>
    )
  }