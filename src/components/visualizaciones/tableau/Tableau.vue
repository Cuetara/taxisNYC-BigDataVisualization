<template>
    <div :id="idTableau">
    </div>
</template>

<script>
export default {
    name: 'Tableau',
    props: {
        url: '',
        options: {},
        width: '',
        height: '',
        filters: {},
        idTableau: {
            type: String,
            required: true
        },
        apiUrl: {
            default: 'https://public.tableau.com/javascripts/api/tableau-2.2.2.min.js'
        }
    },
    data () {
        return {
            viz: {},
            workBook: {}
        }
    },
    watch: {
        url () {
            if (this.viz) {
                this.viz.dispose()
            }
            this.initViz()
        },
        height (val) {
            if (!this.viz.setFrameSize) return
            this.viz.setFrameSize(parseInt(this.width), parseInt(val))
        },
        width (val) {
            if (!this.viz.setFrameSize) return
            this.viz.setFrameSize(parseInt(val), parseInt(this.height))
        },
        filters () {
            if (this.viz) {
                this.viz.dispose()
            }
            this.initViz()
        }
    },
    computed: {
        worksheet () {
            return this.workBook.getActiveSheet()
        }
    },
    methods: {
        initViz () {
            const containerDiv = document.getElementById(this.idTableau)
            // Setting up constructor options
            let options = {}
            if (!this.options) {
                options = {
                    height: this.height || 500,
                    width: this.width || 1000,
                    hideTabs: true,
                    hideToolbar: true,
                    onFirstInteractive: () => { this.workBook = this.viz.getWorkbook() }
                }
                if (this.filters) {
                    Object.keys(this.filters).map((el) => {
                        options[el.toString()] = this.filters[el.toString()]
                    })
                }
            } else {
                options = this.options
            }
            this.viz = new window.tableau.Viz(containerDiv, this.url, options)
        }
    },
    mounted () {
        let recaptchaScript = document.createElement('script')
        // recaptchaScript.async = true
        if (document.getElementById('tableau-script')) {
            recaptchaScript.setAttribute('src', this.apiUrl)
            recaptchaScript.setAttribute('id', 'tableau-script')
            this.tableauScript = document.head.appendChild(recaptchaScript)
        }
        if (document.readyState === 'complete') {
            this.initViz()
            return
        }
        window.addEventListener('load', () => {
            this.initViz()
        })
    },
    // beforeDestroy () {
    //     this.viz.dispose()
    // }
}
</script>