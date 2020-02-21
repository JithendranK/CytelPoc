import getAPI from '../lib/Helper'
import axios from 'axios'
import { header } from '../lib/Helper'

export const getStudies = async () => {
    const url = getAPI('getStudies')
    const result = await axios({
        url,
        method: 'GET',
    })

    if (result.statusText && result.status === 200) {
        return result.data
    } else {
        throw new Error('Something went wrong')
    }
}

export const createStudy = async study => {
    const url = getAPI('createStudies')
    const result = await axios({
        url,
        method: 'POST',
        data: study,
        header,
    })
    if (result.statusText) {
        return result.data
    } else {
        throw new Error('Something went wrong')
    }
}

export const deleteStudy = async id => {
    let url = getAPI('deleteStudies')
    url = `${url}/${id}`
    const result = await axios({
        url,
        method: 'DELETE',
        header,
    })
    if (result.statusText) {
        return result.data
    } else {
        throw new Error('Something went wrong')
    }
}
