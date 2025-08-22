export interface ControlFormSubmit {
  getError(name: string, error: string): boolean | undefined;
  onSubmit(): void
}
