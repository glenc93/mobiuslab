import Header from '../components/Header'

interface ResourceItem {
  id: number
  name: string
  size: string
  url: string
}

interface ResourcesProps {
  onLogout: () => void
  user: any
}

export default function Resources({ onLogout, user }: ResourcesProps) {
  const resources: ResourceItem[] = [
    { id: 1, name: 'Sample Document.pdf', size: '2.5 MB', url: '#' },
    { id: 2, name: 'Project Files.zip', size: '15.3 MB', url: '#' },
    { id: 3, name: 'User Guide.docx', size: '1.2 MB', url: '#' },
  ]

  return (
    <div className="downloads">
      <Header onLogout={onLogout} user={user} />
      <main>
        <h2>Downloads</h2>
        <div className="download-list">
          {resources.map((item) => (
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
