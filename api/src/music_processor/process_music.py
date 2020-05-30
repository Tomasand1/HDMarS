from pyo import *


def process_music(file_array):
	arr = file_array[0, :][:100]
	print(arr)
	freq_arr = []

	s = Server(audio="offline")
	s.boot()
	s.recordOptions(dur=len(arr), filename="../api/assets/processed_file.wav", fileformat=0)
	wav = SquareTable()

	first = 100
	second = 500
	bbb = 0.25
	min, max = 47, 47

	beat = Metro(time=bbb, poly=1).play()

	envelope = CosTable([(0, 0), (first, 1), (second, .3), (8191, 0)])

	amplitude = TrigEnv(beat, table=envelope, dur=0.25, mul=0.7)

	pitch = TrigXnoiseMidi(beat, dist=3, scale=0, mrange=(40, 50))

	sine = Osc(table=wav, freq=pitch, mul=amplitude).out()

	sig = SawTable(order=12).normalize()

	lfo = LFO(freq=1.2, sharp=0.2, type=1, mul=110, add=220)

	envelope_synth = TrigEnv(beat, table=sig, dur=2)

	synth = FM(carrier=lfo, ratio=[.2490, .250], index=envelope_synth, mul=0.2).out()

	def callback(arg):
		lfo.setFreq(list(arg))

	for a in range(0, len(arr)):
		freq_arr.append(a)

	index = 0
	for a in arr:
		# print(a)
		freq_arr[index] = CallAfter(callback, index, (a*10, a*10 + 1))
		index += 1

	s.start()
