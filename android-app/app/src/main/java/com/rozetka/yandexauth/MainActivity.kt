package com.rozetka.yandexauth

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.core.app.ActivityCompat
import androidx.core.view.WindowCompat
import com.rozetka.yandexauth.ui.theme.YandexAuthTheme
import com.yandex.authsdk.YandexAuthException
import com.yandex.authsdk.YandexAuthLoginOptions
import com.yandex.authsdk.YandexAuthOptions
import com.yandex.authsdk.YandexAuthSdk

const val REQUEST_LOGIN_SDK = 1337
const val BOT_DEEP_LINK = "https://t.me/music_yandex_bot?start="

class MainActivity : ComponentActivity() {
    private var showErrorDialog: MutableState<Boolean> = mutableStateOf(false)

    private lateinit var sdk: YandexAuthSdk
    private lateinit var _context: Context

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == REQUEST_LOGIN_SDK) {
            try {
                val yandexAuthToken = sdk.extractToken(resultCode, data)
                yandexAuthToken?.let {
                    openUriInBrowser("$BOT_DEEP_LINK${it.value}", _context)
                }

            } catch (_: YandexAuthException) {
                showErrorDialog.value = true
            }
        } else {
            super.onActivityResult(requestCode, resultCode, data)
        }
    }

    private fun openUriInBrowser(uriString: String, context: Context) {
        val uri = Uri.parse(uriString)
        val intent = Intent(Intent.ACTION_VIEW, uri)
        context.startActivity(intent)
    }

    @Composable
    private fun ShowAlertDialog(title: String, message: String, onDismiss: () -> Unit) {
        var openDialog by remember { mutableStateOf(true) }

        if (openDialog) {
            AlertDialog(
                onDismissRequest = { openDialog = false; onDismiss() },
                title = { Text(text = title, style = MaterialTheme.typography.headlineLarge) },
                text = { Text(text = message, style = MaterialTheme.typography.bodyLarge) },
                confirmButton = {
                    Button(
                        onClick = { openDialog = false; onDismiss() },
                        content = {
                            Text(
                                text = "OK",
                                style = MaterialTheme.typography.labelMedium
                            )
                        }
                    )
                }
            )
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        _context = this
        WindowCompat.setDecorFitsSystemWindows(window, false)
        setContent {
            sdk = YandexAuthSdk(
                LocalContext.current, YandexAuthOptions(LocalContext.current, true, 0)
            )

            YandexAuthTheme {
                Box(Modifier.fillMaxSize()) {
                    Column(
                        Modifier
                            .align(Alignment.Center)
                            .fillMaxWidth()
                    ) {
                        if (showErrorDialog.value) {
                            ShowAlertDialog(
                                "Ошибка",
                                "Авторизация не удалась",
                                fun() { showErrorDialog.value = false })
                        }

                        Image(
                            painter = painterResource(R.drawable.logo),
                            contentDescription = "Logo of the bot",
                            Modifier
                                .padding(vertical = 10.dp)
                                .align(Alignment.CenterHorizontally)
                                .height(180.dp)
                        )

                        Text(
                            text = "Полноценный клиент сервиса Яндекс.Музыка в Telegram!",
                            modifier = Modifier
                                .padding(horizontal = 50.dp)
                                .align(Alignment.CenterHorizontally),
                            style = MaterialTheme.typography.bodyLarge,
                            textAlign = TextAlign.Center
                        )

                        Button(
                            onClick = {
                                ActivityCompat.startActivityForResult(
                                    this@MainActivity as Activity,
                                    sdk.createLoginIntent(YandexAuthLoginOptions.Builder().build()),
                                    REQUEST_LOGIN_SDK,
                                    null
                                )
                            },
                            Modifier
                                .padding(vertical = 10.dp)
                                .align(Alignment.CenterHorizontally)
                                .height(48.dp)
                                .width(200.dp)
                        ) {
                            Text(text = "Войти")
                        }
                    }
                }
            }
        }
    }
}
