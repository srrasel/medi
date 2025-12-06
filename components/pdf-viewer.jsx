"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

export default function PDFViewer({ pdfUrl, title }) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setError("Unable to load PDF. Please download to view.")
    setIsLoading(false)
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-primary/5 border-b border-border px-6 py-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">PDF Preview</p>
        </div>
      </div>

      {/* Viewer Container */}
      <div className="relative bg-muted min-h-96">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Loading PDF...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center px-6">
              <p className="text-destructive font-medium mb-4">{error}</p>
              <a
                href={pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        )}

        {/* PDF Iframe */}
        <iframe
          src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
          className="w-full h-screen"
          title={`${title} - PDF Viewer`}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </div>
    </div>
  )
}
