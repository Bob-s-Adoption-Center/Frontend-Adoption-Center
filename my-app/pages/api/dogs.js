export async function getStaticProps() {
        const res = await fetch('https://api.petfinder.com/v2/animals')
        const data = await res.json()
        console.log(data)
        return {
            props: {
              dogApi,
            },
        }
}