from pyo import *

if __name__ == '__main__':
	s = Server()
	s.boot()
	s.start()
	s.setInputDevice(4)
	s.setOutputDevice(4)
	wav = SquareTable()

	first = 100
	second = 500
	bbb = 1
	min, max = 47, 47

	beat = Metro(time=bbb, poly=7).play()

	envelope = CosTable([(0, 0), (first, 1), (second, .3), (8191, 0)])

	amplitude = TrigEnv(beat, table=envelope, dur=0.25, mul=0.7)

	pitch = TrigXnoiseMidi(beat, dist=3, scale=0, mrange=(40, 50))

	sine = Osc(table=wav, freq=pitch, mul=amplitude).out()

	sig = SawTable(order=12).normalize()

	lfo = LFO(freq=2.2, sharp=0.2, type=1, mul=110, add=220)

	envelope_synth = TrigEnv(beat, table=sig, dur=0.5)

	synth = FM(carrier=[220.5, 220], ratio=[.2490,.250], index=envelope_synth, mul=0.2).out()
	while True:
		beat.set('time', bbb)
		pitch.range(min, max)

		inp = input().lower()
		if inp == 'stop':
			break

		if inp == 's':
			second += 500
			print(second)

		if inp == 'p':
			min, max = min + random.randint(-10, 10), max + random.randint(-10, 10)
			print(min, max)

		if inp == 'f':
			first += 100
			print(first)

		if inp == 'b':
			bbb -= 0.25
			print(bbb)

		if inp == 'c':
			bbb += 0.25
			print(bbb)
		pass

# oscillator = Osc(table=wav, freq=pitch, mul=amplitude).out()
# oscillator.stop()
# s.gui(locals(), exit=False)
