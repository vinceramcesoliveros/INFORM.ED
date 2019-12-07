import { NuxtAxiosInstance } from '@nuxtjs/axios'

/**
 *
 * Nuxt Axios and axios have the same method.
 */
export const fetchAccounts = async (axios: NuxtAxiosInstance, url: string) => {
  try {
    return await axios.get(url)
  } catch (err) {}
}
