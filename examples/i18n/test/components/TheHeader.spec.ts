import { describe, expect, it } from 'vitest';

import { mountSuspended } from '@nuxt/test-utils/runtime'
import TheHeader from '~/components/TheHeader.vue';

describe('Mounting TheHeader with `@nuxtjs/i18n`', () => {
  it('can mount some component', async () => {
    const component = await mountSuspended(TheHeader);
    expect(component.vm).toBeTruthy();
  });
});
