// Summarize Cause Details Flow
'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing cause details.
 *
 * - summarizeCauseDetails - A function that takes cause details as input and returns a concise summary.
 * - SummarizeCauseDetailsInput - The input type for the summarizeCauseDetails function.
 * - SummarizeCauseDetailsOutput - The return type for the summarizeCauseDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCauseDetailsInputSchema = z.object({
  causeDetails: z.string().describe('Detailed text describing the cause.'),
});
export type SummarizeCauseDetailsInput = z.infer<typeof SummarizeCauseDetailsInputSchema>;

const SummarizeCauseDetailsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the cause details.'),
});
export type SummarizeCauseDetailsOutput = z.infer<typeof SummarizeCauseDetailsOutputSchema>;

export async function summarizeCauseDetails(
  input: SummarizeCauseDetailsInput
): Promise<SummarizeCauseDetailsOutput> {
  return summarizeCauseDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCauseDetailsPrompt',
  input: {schema: SummarizeCauseDetailsInputSchema},
  output: {schema: SummarizeCauseDetailsOutputSchema},
  prompt: `Summarize the following cause details in a concise manner:\n\n{{{causeDetails}}}`,
});

const summarizeCauseDetailsFlow = ai.defineFlow(
  {
    name: 'summarizeCauseDetailsFlow',
    inputSchema: SummarizeCauseDetailsInputSchema,
    outputSchema: SummarizeCauseDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
