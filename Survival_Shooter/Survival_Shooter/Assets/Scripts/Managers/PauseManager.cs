using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.Audio;
#if UNITY_EDITOR
using UnityEditor;
#endif

public class PauseManager : MonoBehaviour {
    
    Canvas canvas;
    public AudioMixerSnapshot paused;
    public AudioMixerSnapshot unpaused;
    public Slider musicSlider;
    public Slider FXSlider;

    void Start()
    {
        canvas = GetComponent<Canvas>();
        canvas.enabled = false;
        LoadState();
    }
    
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            Pause();
        }
    }
    
    public void Pause()
    {
        canvas.enabled = !canvas.enabled;
        Time.timeScale = Time.timeScale == 0 ? 1 : 0;
        Lowpass();
        if (!canvas.enabled)
        {
            SaveState();
        }
    }

    void Lowpass()
    {
        if (Time.timeScale == 0)
        {
            paused.TransitionTo(.01f);
        }
        else
        {
            unpaused.TransitionTo(.01f);
        }
    }

    public void Quit()
    {
        SaveState();
        #if UNITY_EDITOR 
        EditorApplication.isPlaying = false;
        #else 
        Application.Quit();
        #endif
    }

    void LoadState()
    {
        musicSlider.value = PlayerPrefs.GetFloat("MusicVolume", 1f);
        FXSlider.value = PlayerPrefs.GetFloat("FXVolume", 1f);
    }

    void SaveState()
    {
        PlayerPrefs.SetFloat("MusicVolume", musicSlider.value);
        PlayerPrefs.SetFloat("FXVolume", FXSlider.value);
    }
}