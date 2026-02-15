import { Link } from 'react-router-dom'

interface DownloadItem {
  id: number
  name: string
  size: string
  url: string
}

export default function Downloads() {
  const downloads: DownloadItem[] = [
    { id: 1, name: 'Sample Document.pdf', size: '2.5 MB', url: '#' },
    { id: 2, name: 'Project Files.zip', size: '15.3 MB', url: '#' },
    { id: 3, name: 'User Guide.docx', size: '1.2 MB', url: '#' },
  ]

  return (
    <div className="downloads">
      <nav>
        <h1>MobiusLab</h1>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <main>
        <h2>Downloads</h2>
        <div className="download-list">
          {downloads.map((item) => (
            <div key={item.id} className="download-item">
              <div>
                <h3>{item.name}</h3>
                <span>{item.size}</span>
              </div>
              <a href={item.url} download>Download</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
