let imgArr = []

const imgFileGenerator = () => {
	for (let i = 1; i <= 100; i++) {
        i < 10 ? imgArr.push((`image_00${i}.jpg`)) : imgArr.push(`image_0${i}.jpg`)
	}
	console.log(imgArr)
}
imgFileGenerator()