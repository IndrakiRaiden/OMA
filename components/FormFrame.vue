<template>
  <div class="form-frame">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FormFrame'
}
</script>

<style scoped>
.form-frame {
  background-color: var(--background-secondary);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(var(--content-primary-rgb), 0.1);
  transition: box-shadow 0.3s ease;
}

.form-frame:hover {
  box-shadow: 0 6px 12px rgba(var(--content-primary-rgb), 0.15);
}

/* Form Styles */
:deep(.form-group) {
  position: relative;
}

:deep(.form-group label) {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--content-dark);
  font-weight: 500;
}

:deep(.form-group input),
:deep(.form-group select),
:deep(.form-group textarea) {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
  transition: all 0.3s ease;
  color: var(--content-dark);
  outline: none;
}

:deep(.form-group select) {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.25rem;
  padding-right: 2.5rem;
}

:deep(.form-group input:focus),
:deep(.form-group textarea:focus),
:deep(.form-group input.has-value),
:deep(.form-group textarea.has-value) {
  border-color: #F7B801;
  box-shadow: 0 0 0 2px rgba(247, 184, 1, 0.1);
  outline: none;
}

:deep(.form-group select:focus),
:deep(.form-group select.has-value) {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23F7B801'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  border-color: #F7B801;
  box-shadow: 0 0 0 2px rgba(247, 184, 1, 0.1);
  outline: none;
}

:deep(.submit-btn) {
  width: 100%;
  padding: 1rem;
  background: var(--content-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

:deep(.submit-btn:not(:disabled):hover) {
  background: var(--content-secondary);
}

:deep(.submit-btn:disabled) {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .form-frame {
    padding: 1.5rem;
  }
}
</style>
