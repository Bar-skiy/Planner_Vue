export default {
    install(app, options) {
        let current = 'ru'
        const changeLanguage = name => {
            current = name

        }
        app.config.globalProperties.$i18n = key => {
            // lng.title -> [lng, title] -> current[lng][title]
            return key.split('.').reduce(( obj, k) => {
                return obj[k] || '=== UNKNOWN ==='
            }, options[current])
        }
        app.provide('changeI18N', changeLanguage)
    }
}