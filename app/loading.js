// app/loading.js
import { Geist_Mono } from "next/font/google";
import ClipLoader from "react-spinners/ClipLoader";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function Loading() {
  return (
    <div className={`${geistMono.className} fixed inset-0 flex items-center justify-center bg-background z-50`}>
      <div className="text-center">
        <ClipLoader
          color="#000000"
          loading={true}
          size={50}
          aria-label="Loading Spinner"
        />
        <p className="mt-4 text-sm">Loading experience...</p>
      </div>
    </div>
  );
}