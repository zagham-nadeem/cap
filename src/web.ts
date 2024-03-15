import { WebPlugin } from '@capacitor/core';

import type { FolderPickerPlugin } from './definitions';

export class FolderPickerWeb extends WebPlugin implements FolderPickerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
