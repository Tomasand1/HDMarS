from pyo import *


def meditation(freq_array, intensity):
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
	pit = Iter(seq.mix(1), choice=pits)
	dur = Iter(seq.mix(1), choice=durs)
	amp = TrigEnv(seq, table=env, dur=dur, mul=.3)

	first = 100
	second = 500

	beat = Metro(time=intensity[0] + 0.5, poly=1).play()

	envelope = CosTable([(0, 0), (first, 1), (second, .5), (8191, 0)])

	amplitude = TrigEnv(beat, table=envelope, dur=intensity[0], mul=0.7)

	pitch = TrigXnoiseMidi(beat, dist=3, scale=0, mrange=(20, 20))

	sine = Osc(table=wav, freq=pitch, mul=amplitude).out()

	sig = SawTable(order=12).normalize()

	lfo = LFO(freq=1.2, sharp=0.2, type=4, mul=200, add=100)

	envelope_synth = TrigEnv(beat, table=sig, dur=5)

	synth = FM(carrier=lfo, ratio=[.2490, .250], index=envelope_synth, mul=0.2).out()

	ldf = Sine([.4,.2], mul=.2, add=.5)

	def callback(arg):
		lfo.setFreq(list(arg))

	for a in range(0, len(freq_array)):
		freq_arr.append(a)

	index = 0
	for a in freq_array:
		# print(a)
		freq_arr[index] = CallAfter(callback, index, (a * intensity[1], a * intensity[1] + 1))
		index += 1

	s.start()


def study(freq_array, intensity):
	freq_array = freq_array
	print(freq_array)
	freq_arr = []

	s = Server(audio="offline", sr=44100, nchnls=2, buffersize=512, duplex=1)
	s.boot()
	s.recordOptions(dur=len(freq_array), filename="../api/assets/processed_file.wav", fileformat=0)
	wav = SquareTable()


	first = 100
	second = 500

	beat = Metro(time=intensity[0] + 1, poly=1).play()

	envelope = CosTable([(0, 0), (first, 1), (second, .5), (8191, 0)])

	amplitude = TrigEnv(beat, table=envelope, dur=intensity[0], mul=0.7)

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


def funky(freq_array, intensity):
	freq_array = freq_array
	freq_arr = []


	s = Server(audio="offline", sr=44100, nchnls=2, buffersize=512, duplex=1)
	s.boot()
	s.recordOptions(dur=len(freq_array), filename="../api/assets/processed_file.wav", fileformat=0)
	wav = SquareTable()
	pi = [(i - 0.1) * 100 for i in freq_array]
	pits = midiToHz(pi)
	durs = freq_array

	offset = 0
	objs = []
	for i in range(len(freq_array)):
		pit = pits[i % len(freq_array)]
		dur = 0.1 + float(durs[i % len(freq_array)])
		start = offset
		offset = start + dur
		amp = Fader(fadein=0.005, fadeout=dur - 0.005, dur=dur, mul=.3).play(delay=start, dur=dur + .1)
		osc = SineLoop(freq=pit, feedback=.07, mul=amp).out(delay=start, dur=dur + .1)
		objs.append(amp)
		objs.append(osc)

	first = 100
	second = 500

	beat = Metro(time=intensity[0] + 0.5, poly=1).play()

	envelope = CosTable([(0, 0), (first, 1), (second, .5), (8191, 0)])

	amplitude = TrigEnv(beat, table=envelope, dur=intensity[0], mul=0.7)

	pitch = TrigXnoiseMidi(beat, dist=3, scale=0, mrange=(20, 20))

	sine = Osc(table=wav, freq=pitch, mul=amplitude).out()

	sig = SawTable(order=12).normalize()

	lfo = LFO(freq=1.2, sharp=0.2, type=4, mul=200, add=100)

	envelope_synth = TrigEnv(beat, table=sig, dur=5)


	ldf = Sine([.2,.1], mul=.2, add=.5)
	synth_80 = SuperSaw(freq=60, detune=ldf, bal=0.5, mul=0.2)

	def callback(arg):
		lfo.setFreq(list(arg))

	for a in range(0, len(freq_array)):
		freq_arr.append(a)

	index = 0
	for a in freq_array:
		# print(a)
		freq_arr[index] = CallAfter(callback, index, (a * intensity[1], a * intensity[1] + 1))
		index += 1

	s.start()

