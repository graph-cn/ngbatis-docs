import { version } from "vue"

export function widthLtHeight() {
  return document.body.clientWidth < document.body.offsetHeight
}

export function parseHashSearch() : any {
  const location = document.location
  const hash = location.hash
  const [route, search] = hash.split('?')
  const querys = search?.split('&')
  const query = {}
  querys?.forEach(p => {
    let [k, v] = p.split('=')
    query[k] = v
  })
  return query
}

export function currentVersion() : string {
  let query = parseHashSearch()
  let v = query.v ?? getVersion()
  setVersion(v)
  return v;
}

export function setVersion(version) {
  localStorage.setItem('v', version);
}

export function getVersion() : string {
  return localStorage.getItem('v') ?? 'v1.1.0-rc'
}