export function useScrollToSection() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return { scrollTo }
}