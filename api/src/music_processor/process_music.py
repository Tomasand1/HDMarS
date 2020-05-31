from pyo import *


def meditation(freq_array):
	freq_array = freq_array
	freq_arr = []


	s = Server(audio="offline", sr=44100, nchnls=2, buffersize=512, duplex=1)
	s.boot()
	s.recordOptions(dur=len(freq_array), filename="../api/assets/processed_file.wav", fileformat=0)
	wav = SquareTable()

	pits = midiToHz([60])
	durs = [3]

	time_seq = [i / .125 for i in durs]

	# Amplitude envelope
	env = CosTable([(1, .5), (200, .2), (500, .2), (8192, 0)])

	# trigger sequence base on duration sequence
	seq = Seq(time=.125, seq=time_seq, poly=4).play()
	# get pitch and duration from lists (.mix(1) to avoid duplication)
	pit = Iter(seq.mix(1), choice=pits)
	dur = Iter(seq.mix(1), choice=durs)
	# trig the amplitude envelope (no mix to keep the polyphony and not truncate an envelope)
	amp = TrigEnv(seq, table=env, dur=dur, mul=.3)
	# output
	# osc = SineLoop(freq=pit, feedback=.07, mul=amp).out()

	first = 100
	second = 500
	bbb = 0.25
	min, max = 47, 47

	beat = Metro(time=6, poly=1).play()
	# beat = Beat(time=.125, taps=8, w1=[90, 80], w2=50, w3=35, poly=1).play()
	# envelope = CosTable([(0, 0), (first, 40), (second, .9), (8191, 0)])

	envelope = CosTable([(0, 0), (first, 1), (second, .5), (8191, 0)])

	amplitude = TrigEnv(beat, table=envelope, dur=5, mul=0.7)

	pitch = TrigXnoiseMidi(beat, dist=3, scale=0, mrange=(15, 15))

	sine = Osc(table=wav, freq=pitch, mul=amplitude).out()

	sig = SawTable(order=12).normalize()

	# lfo = LFO(freq=1.2, sharp=0.2, type=4, mul=210, add=100)
	lfo = LFO(freq=1.2, sharp=0.2, type=4, mul=200, add=100)

	envelope_synth = TrigEnv(beat, table=sig, dur=2)

	synth = FM(carrier=lfo, ratio=[.2490, .250], index=envelope_synth, mul=0.2).out()

	ldf = Sine([.4,.2], mul=.2, add=.5)
	# synth_80 = SuperSaw(freq=60, detune=ldf, bal=0.5, mul=0.2).out()
	# f = Phasor(freq=[1, 1.5], mul=700, add=300)
	# sine = Sine(freq=f, mul=.2).out()
	# a = Rossler(pitch=.003, stereo=True, mul=.2, add=.2)
	# b = Rossler(pitch=[.5, .48], mul=a).out()
	# d = ChenLee(pitch=.01, chaos=0.1, stereo=True, mul=.5, add=.5)
	# g = ChenLee(pitch=1, chaos=d, mul=0.5).out()
	# a = Rossler(pitch=.003, stereo=True, mul=.2, add=.2)
	# b = Rossler(pitch=[.5, .48], mul=a).out()

	def callback(arg):
		lfo.setFreq(list(arg))

	for a in range(0, len(freq_array)):
		freq_arr.append(a)

	index = 0
	for a in freq_array:
		# print(a)
		freq_arr[index] = CallAfter(callback, index, (a, a + 1))
		index += 1

	s.start()


def study(freq_array):
	freq_array = freq_array
	print(freq_array)
	freq_arr = []


	s = Server(audio="offline", sr=44100, nchnls=2, buffersize=512, duplex=1)
	s.boot()
	s.recordOptions(dur=len(freq_array), filename="../api/assets/processed_file.wav", fileformat=0)
	wav = SquareTable()


	first = 100
	second = 500

	beat = Metro(time=6, poly=1).play()

	envelope = CosTable([(0, 0), (first, 1), (second, .5), (8191, 0)])

	amplitude = TrigEnv(beat, table=envelope, dur=5, mul=0.7)

	pitch = TrigXnoiseMidi(beat, dist=3, scale=0, mrange=(20, 20))

	sine = Osc(table=wav, freq=pitch, mul=amplitude).out()

	a = PinkNoise(.4).mix(2).out()
	b = BrownNoise(.07).mix(2).out()


	def callback(arg):
		b.setMul(list(arg))
		# b.setAdd(list(arg))
		beat.setTime(list(arg))


	for a in range(0, len(freq_array)):
		freq_arr.append(a)

	index = 0
	for a in freq_array:
		# print(a)
		freq_arr[index] = CallAfter(callback, index, (a, a+1))
		index += 1

	s.start()
