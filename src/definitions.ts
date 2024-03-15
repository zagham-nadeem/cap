export interface FolderPickerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
