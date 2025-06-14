import "./global.css";

export const metadata = {
  title: "NextGram on Azure",
  description:
    "A sample Next.js app showing dynamic routing with modals as a route.",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {props.children}
        {props.modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
