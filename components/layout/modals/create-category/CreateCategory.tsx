// components/CreateCategory.tsx
'use client'

import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Button, FormGroup } from '@/components/ui'
import { useCreateCategory } from '@/lib'
import styles from './CreateCategory.module.scss'

export function CreateCategory() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const { create, loading, error } = useCreateCategory()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return

    const category = await create(name)
    if (category) {
      setOpen(false)
      setName('')
      // 🔔 TODO: toast or refresh list here
    }
  }

  return (
    <>
      <button
        className={styles.trigger} // style this however you like
        onClick={() => setOpen(true)}
      >
        + New Category
      </button>

      <Transition appear show={open} as={Fragment}>
        <Dialog as='div' className={styles.dialogRoot} onClose={setOpen}>
          {/* Backdrop */}
          <TransitionChild
            as={Fragment}
            enter={styles.fadeIn}
            enterFrom={styles.fadeInFrom}
            enterTo={styles.fadeInTo}
            leave={styles.fadeOut}
            leaveFrom={styles.fadeOutFrom}
            leaveTo={styles.fadeOutTo}
          >
            <div className={styles.backdrop} />
          </TransitionChild>

          {/* Centering wrapper */}
          <div className={styles.wrapper}>
            <TransitionChild
              as={Fragment}
              enter={styles.scaleIn}
              enterFrom={styles.scaleInFrom}
              enterTo={styles.scaleInTo}
              leave={styles.scaleOut}
              leaveFrom={styles.scaleOutFrom}
              leaveTo={styles.scaleOutTo}
            >
              <DialogPanel className={styles.panel}>
                <DialogTitle className={styles.title}>
                  Create Category
                </DialogTitle>

                <form onSubmit={handleSubmit} className={styles.form}>
                  {/* Your shared input component */}
                  <FormGroup
                    id='category-name'
                    name='name'
                    label='Name'
                    required
                    value={name}
                    placeholder='e.g. Web Development'
                    onChange={(e) => setName(e.target.value)}
                  />

                  {error && <p className={styles.error}>{error}</p>}

                  <div className={styles.actions}>
                    <Button
                      variant='primary'
                      type='submit'
                      className={styles.confirm}
                      disabled={loading || !name.trim()}
                    >
                      {loading ? 'Saving…' : 'Save'}
                    </Button>
                    <Button
                      type='button'
                      variant='secondary'
                      className={styles.cancel}
                      onClick={() => setOpen(false)}
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
