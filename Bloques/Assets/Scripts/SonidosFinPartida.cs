using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SonidosFinPartida : MonoBehaviour
{
    public AudioSource audioSource;
    public AudioClip completado;
    public AudioClip gameOver;
    public AudioClip error;


    public void GameOverSound()
    {
        AudioPlay(gameOver);
    }

    public void CompletadoSound()
    {
        AudioPlay(completado);
    }

    public void ErrorSound()
    {
        AudioPlay(error);
    }

    void AudioPlay(AudioClip clip)
    {
        audioSource.clip = clip;
        audioSource.Play();
    }
}
