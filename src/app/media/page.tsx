import { Color } from "../styles/colors";

export default function Media() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{
        backgroundColor: Color.lightOrange,
      }}
    >
      <div>This is the media page</div>
    </main>
  );
}
