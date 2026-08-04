import { supabase, isSupabaseConfigured } from './supabaseClient';
import { Rating, SurveyResponse } from '../types/survey';

function mapRating(rating: Rating): { rating_value: number | null; rating_is_na: boolean } {
  if (rating === 'N/A') return { rating_value: null, rating_is_na: true };
  return { rating_value: rating, rating_is_na: false };
}

function toRow(response: SurveyResponse) {
  const { rating_value, rating_is_na } = mapRating(response.rating);
  return {
    response_id: response.responseId,
    survey_type: response.surveyType,
    respondent_type: response.respondentType,
    start_time: response.startTime ?? null,
    submission_date: response.submissionDate,
    company: response.company,
    department: response.department ?? null,
    address: response.address ?? null,
    question_id: response.questionId,
    question_number: response.questionNumber,
    question: response.question,
    question_category: response.questionCategory,
    rating_value,
    rating_is_na,
    comment: response.comment ?? null,
    respondent_email: response.respondentEmail ?? null,
    archived: response.archived ?? false,
    archived_at: response.archivedAt ?? null,
    archived_by_survey_id: response.archivedBySurveyId ?? null,
    archived_by_survey_title: response.archivedBySurveyTitle ?? null,
    series_id: response.seriesId ?? null,
  };
}

// Fire-and-forget: localStorage stays the source of truth the rest of the
// app reads from until the read side is migrated too, so a Supabase failure
// here (unconfigured project, schema not applied yet, RLS mismatch) should
// never block or break the existing submit flow - just log it.
export async function insertSurveyResponses(responses: SurveyResponse[]): Promise<void> {
  if (!isSupabaseConfigured || responses.length === 0) return;
  const { error } = await supabase.from('survey_responses').insert(responses.map(toRow));
  if (error) {
    console.error('Supabase: failed to save survey response(s)', error);
  }
}
