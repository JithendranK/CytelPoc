const ENV = getENV()

const END_POINTs = {
    getStudies: `/studies`,
    createStudies: `/studies`,
    deleteStudies: `/studies`,
}

const URLs = {
    development: 'http://localhost:3000',
    test: 'http://test.cytel.com',
    production: 'http://prod.cytel.com',
}

function getENV() {
    const host = window.location.host
    const isLocal = host.includes('localhost')
    const isDev = host.includes('dev')
    const isTest = host.includes('test')
    const isPro = host.includes('prod')
    if (isLocal || isDev) return 'development'
    if (isTest) return 'test'
    if (isPro) return 'production'
}

export default function getAPI(uri) {
    let url = ''
    url = `${URLs[ENV]}${END_POINTs[uri]}`
    return url
}

export function header() {
    return { 'Content-Type': 'application/json' }
}
