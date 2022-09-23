// const next = () => {
//   // 運送表單用檢查
//   if (step === 2) {
//     const { name, address, phone } = shipping

//     // 有錯誤訊息會跳出警告，不會到"下一步"
//     const errors = []

//     if (!name) errors.push('姓名沒填~ ')

//     if (!address) errors.push('住址沒填~ ')

//     if (!phone) errors.push('電話沒填~ ')

//     if (errors.length > 0) {
//       alert(errors.join(','))
//       return
//     }
//   }

//   // 沒錯誤才會到下一步
//   if (step < maxSteps) setStep(step + 1)
// }