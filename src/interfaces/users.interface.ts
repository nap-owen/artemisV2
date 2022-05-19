export interface Meta {
  access_token: string
  token_type: string
  expires_in: string
}

export interface Data {
  id: number
  lawFirm_id?: any
  raUser_id?: any
  first_name: string
  last_name: string
  user_id: string
  user_id1?: any
  e_mail: string
  access_level: number
  role: number
  status: number
  created_at: string
  updated_at: string
  deleted_at?: any
  case_status_filter: number[]
}

export interface IUser {
  meta: Meta
  data: Data
  links: any[]
}
