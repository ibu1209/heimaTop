import instance from '../utils/myhttp'

export function apiLogin ({ mobile, code }) {
  return instance({
    url: '/authorizations',
    method: 'POST',
    data: {
      mobile: mobile,
      code: code
    }
  })
}
