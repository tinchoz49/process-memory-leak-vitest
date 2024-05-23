import { defineConfig } from 'vitest/config'

// TODO: uncomment this to detect all de events
// const onProcess = process.on.bind(process)
// process.on = (...args) => {
//   console.log(...args)
//   onProcess(...args)
// }

export default defineConfig({
  test: {
    isolate: false
  },
})
