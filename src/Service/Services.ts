const Connexion = async(email: string, password: string) => {
    const response = await fetch(`/api/sign-in`, {
        method: "POST",
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({email, password})
    })
    const result = await response.json()
    return result
}

export {Connexion}