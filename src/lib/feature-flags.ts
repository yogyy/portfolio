import { PostHog } from 'posthog-node';
import { env } from '@/env';

const client = new PostHog(env.NEXT_PUBLIC_POSTHOG_KEY, {
  host: 'https://app.posthog.com',
});

export { client };
