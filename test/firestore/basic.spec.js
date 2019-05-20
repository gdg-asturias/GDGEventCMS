import { setup, teardown } from './utils'

const mockData = {
  'speakers/speaker1': {
    hi: 'hi'
  },
  'talks/talk1': {
    hi: 'hi'
  }
}
const mockAnonymousUser = {
  uid: 'santima10',
  firebase: {
    sign_in_provider: 'anonymous'
  }
}

const mockUser = {
  uid: 'santima10-auth',
  firebase: {
    sign_in_provider: 'password'
  }
}

describe('firestore', () => {
  let db

  describe('unauth user', () => {
    beforeAll(async () => {
      db = await setup({
        data: mockData
      })
    })

    afterAll(async () => {
      await teardown()
    })

    it('fails when writing to any collection', async () => {
      const ref = db.collection('potatoe')
      await expect(ref.doc('pepepe').set({ hi: 'hi' })).toDeny()
    })

    it('fails when reading from any collection', async () => {
      const ref = db.collection('potatoe').doc('pepepe')
      await expect(ref.get()).toDeny()
    })

    it("can read from 'speakers' collection", async () => {
      const ref = db.collection('speakers').doc('speaker1')
      await expect(ref.get()).toAllow()
    })

    it("can read from 'talks' collection", async () => {
      const ref = db.collection('talks').doc('talk1')
      await expect(ref.get()).toAllow()
    })

    it("can read from 'events' collection", async () => {
      const ref = db.collection('events').doc('event1')
      await expect(ref.get()).toAllow()
    })

    it("can read from 'faqs' collection", async () => {
      const ref = db.collection('faqs').doc('faq1')
      await expect(ref.get()).toAllow()
    })

    it("can read from 'challenges' collection", async () => {
      const ref = db.collection('challenges').doc('faq1')
      await expect(ref.get()).toAllow()
    })

    it("can not write to 'speakers' collection", async () => {
      const ref = db.collection('speakers')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })

    it("can not write to 'talks' collection", async () => {
      const ref = db.collection('talks')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })

    it("can not write to 'events' collection", async () => {
      const ref = db.collection('events')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })

    it("can not write to 'feedback' collection", async () => {
      const ref = db.collection('talks/talk1/feedback')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })

    it("can not write to 'faqs' collection", async () => {
      const ref = db.collection('faqs')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })

    it("can not write to 'challenges' collection", async () => {
      const ref = db.collection('challenges')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })
  })

  describe('auth anonymous user', () => {
    beforeAll(async () => {
      db = await setup({
        auth: mockAnonymousUser,
        data: mockData
      })
    })

    afterAll(async () => {
      await teardown()
    })

    it("can not write to 'speakers' collection", async () => {
      const ref = db.collection('speakers')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })

    it("can not write to 'talks' collection", async () => {
      const ref = db.collection('talks')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })

    it("can not write to 'events' collection", async () => {
      const ref = db.collection('events')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })

    it("can not write to 'challenges' collection", async () => {
      const ref = db.collection('challenges')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })

    it("can write to 'feedback' collection", async () => {
      const ref = db.collection('talks/talk1/feedback')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toAllow()
    })

    it("can not write to 'faqs' collection", async () => {
      const ref = db.collection('faqs')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })

    it("can read from 'speakers' collection", async () => {
      const ref = db.collection('speakers').doc('speaker1')
      await expect(ref.get()).toAllow()
    })

    it("can read from 'talks' collection", async () => {
      const ref = db.collection('talks').doc('talk1')
      await expect(ref.get()).toAllow()
    })

    it("can read from 'events' collection", async () => {
      const ref = db.collection('events').doc('event1')
      await expect(ref.get()).toAllow()
    })

    it("can read from 'faqs' collection", async () => {
      const ref = db.collection('faqs').doc('faq1')
      await expect(ref.get()).toAllow()
    })

    it("can read from 'challenges' collection", async () => {
      const ref = db.collection('challenges').doc('faq1')
      await expect(ref.get()).toAllow()
    })
  })

  describe('auth user', () => {
    beforeAll(async () => {
      db = await setup({
        auth: mockUser,
        data: mockData
      })
    })

    afterAll(async () => {
      await teardown()
    })

    it("can write to 'speakers' collection", async () => {
      const ref = db.collection('speakers')
      await expect(ref.doc('speaker1').set({ hi: 'hi' })).toAllow()
    })

    it("can write to 'events' collection", async () => {
      const ref = db.collection('events')
      await expect(ref.doc('doc1').set({ hi: 'hi' })).toAllow()
    })

    it("can write to 'talks' collection", async () => {
      const ref = db.collection('talks')
      await expect(ref.doc('doc1').set({ hi: 'hi' })).toAllow()
    })

    it("can write to 'talks/*/feedback' collection", async () => {
      const ref = db.collection('talks/doc1/feedback')
      await expect(ref.doc('doc1').set({ hi: 'hi' })).toAllow()
    })

    it("can write to 'faqs' collection", async () => {
      const ref = db.collection('faqs')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toAllow()
    })

    it("can write to 'challenges' collection", async () => {
      const ref = db.collection('challenges')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toAllow()
    })
  })
})
