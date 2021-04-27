import axios from 'axios';

const BASE_URI = 'http://uhooru.live/api/v1';

const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtb3JwaCIsImV4cCI6MTYxOTI4ODIzNCwiaWF0IjoxNjE2ODY5MDM0LCJpc3MiOiJtb3JwaCIsImp0aSI6IjAwZDNiZmRjLTU4ODgtNDI3Mi05NjM2LWE4NTZiZjhmYTFhNiIsIm5iZiI6MTYxNjg2OTAzMywic3ViIjoiMzEiLCJ0eXAiOiJhY2Nlc3MifQ.eVH_lxr0gHUQO-9g1vDIRDYz4sFmmfzuw0F4fj_w1IUw8sHYZmJUeMZ0DN8cVpM6UApxfwZF8q5y5N2oAYXY_w";

export const getMoviesAsync = async () => {
    return await axios
        .get(`${BASE_URI}/movies`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => response.data)
        .catch(error => alert(error))
        .finally(() => {
        });
}

export const getMovieAsync = async (movieId) => {
    return await axios
        .get(`${BASE_URI}/movies/${movieId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => response.data)
        .catch(error => alert(error.message))
        .finally(() => {
        });
}